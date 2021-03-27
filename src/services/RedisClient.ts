/* eslint-disable no-console */
import { createClient, RetryStrategyOptions } from 'redis';

export type CacheKey = string;

export const TOTAL_RETRY_TIME = 1000 * 60 * 60;
export const MAX_ATTEMPTS = 10;
export const RECONNECT_INTERVAL = 300;
export const MAX_RECONNECT_INTERVAL = RECONNECT_INTERVAL * MAX_ATTEMPTS;

export const REDIS_ERRORS: { [key: string]: { code?: string; message: string } } = {
  connectionRefused: {
    code: 'ECONNREFUSED',
    message: 'Redis - The server refused the connection',
  },
  retryTimeoutExceeded: {
    message: 'Redis - Retry time exhausted',
  },
  maxAttemptsExceeded: {
    message: 'Redis - Maximum attempts reached',
  },
};

export function retryStrategy(options: Partial<RetryStrategyOptions>): number | Error {
  if (options.error && options.error.code === REDIS_ERRORS.connectionRefused.code) {
    // End reconnecting on a specific error and flush all commands with
    // a individual error
    return new Error(REDIS_ERRORS.connectionRefused.message);
  }
  if ((options.total_retry_time || 0) > TOTAL_RETRY_TIME) {
    // End reconnecting after a specific timeout and flush all commands
    // with a individual error
    return new Error(REDIS_ERRORS.retryTimeoutExceeded.message);
  }
  if ((options.attempt || 0) > MAX_ATTEMPTS) {
    // End reconnecting with built in error
    return new Error(REDIS_ERRORS.maxAttemptsExceeded.message);
  }
  // reconnect after
  return Math.min((options.attempt || 0) * RECONNECT_INTERVAL, MAX_RECONNECT_INTERVAL);
}

const { REDIS_HOST, REDIS_PORT } = process.env;

const client = createClient({
  host: REDIS_HOST,
  port: parseInt(REDIS_PORT || '0', 10),
  enable_offline_queue: false,
  retry_strategy: retryStrategy,
});

client.on('connect', () => {
  console.info(`REDIS connected ${REDIS_HOST}:${REDIS_PORT}`);
});

client.on('error', (err) => {
  console.error('REDIS Error', err);
});

client.on('reconnecting', () => {
  console.info('REDIS is reconnecting');
});

client.on('end', () => {
  console.info('REDIS connection ended or could not be established');
});

function get(key: CacheKey): Promise<string | undefined> {
  return new Promise<string | undefined>((resolve, reject) =>
    client.get(key, (err, result) => {
      if (err) {
        return reject(err.message);
      }
      return resolve(result === null ? undefined : result);
    })
  );
}

function set(key: CacheKey, value: string, ttlInSeconds: number): Promise<boolean> {
  return new Promise<boolean>((resolve, reject) =>
    client.set(key, value, 'EX', ttlInSeconds, (err, result) => {
      if (result === 'OK') {
        return resolve(true);
      }
      return reject(err ? err.message : 'Redis set failed');
    })
  );
}

export const redisClient = {
  get,
  set,
  get isConnected(): boolean {
    return client.connected;
  },
};
