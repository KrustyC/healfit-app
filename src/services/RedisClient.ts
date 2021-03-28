/* eslint-disable no-console */
import zlib from 'zlib';
import { Buffer } from 'buffer';
import { promisify } from 'util';
import redis from 'redis';

export type CacheKey = string;

function getClient() {
  const client = redis.createClient({
    url: process.env.REDIS_URL,
  });

  client.on('error', (err): void => {
    console.error('Redis', err);
  });

  return client;
}

async function get(key: CacheKey): Promise<string | undefined> {
  const client = getClient();

  const inflate = promisify(zlib.inflate);
  const getAsync = promisify(client.get).bind(client);

  let result;
  try {
    const compressedResult = await getAsync(key);
    result = await inflate(Buffer.from(compressedResult, 'base64'));
  } catch (e) {
    console.error('ERROR REDIS GET:', e.message);
  }

  client.quit();

  return result?.toString();
}

async function set(key: CacheKey, value: string, ttlInSeconds: number): Promise<boolean> {
  const client = getClient();

  const setAsync = promisify(client.set).bind(client);
  const deflate = promisify(zlib.deflate);
  let success = false;

  try {
    const compressedValue = await deflate(value);

    await setAsync(key, compressedValue.toString('base64'), 'EX', ttlInSeconds);
    success = true;
  } catch (e) {
    console.error('ERROR REDIS SET:', e.message);
  }

  client.quit();

  return success;
}

export { get, set };
