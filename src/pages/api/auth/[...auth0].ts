import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { handleAuth, handleCallback, Session } from '@auth0/nextjs-auth0';
import { config } from 'config';
import { connectDB } from 'middlewares/mongodb';
import { UserModel } from 'models/User/User.model';

const { SPOONACULAR_API_KEY } = process.env;

interface SpoonacularUser {
  username: string;
  hash: string;
}

interface SpoonacularConnectApiResponseUser {
  data: SpoonacularUser & {
    status: string;
  };
}

async function linkUserToSpoonacular(email: string): Promise<SpoonacularUser | null> {
  const url = `${config.SPOONACULAR_API_HOST}/users/connect?apiKey=${SPOONACULAR_API_KEY}`;
  const res = await axios.post<{ email: string }, SpoonacularConnectApiResponseUser>(url, {
    email,
  });

  if (res.data.status !== 'success') {
    return null;
  }

  return {
    hash: res.data.hash,
    username: res.data.username,
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function afterCallback(
  req: NextApiRequest,
  res: NextApiResponse,
  session: Session
): Promise<Session> {
  console.log('dio emrda');
  if (!session.user) {
    return session;
  }

  const { email, name, sub } = session.user;

  console.log('suino');
  const user = await UserModel.findOne({ auth0Id: sub }).exec();
  console.log('suino 23', user);

  if (!user) {
    try {
      const spoonacularInfo = await linkUserToSpoonacular(email);

      if (!spoonacularInfo) {
        throw new Error('Could not retrieve spoonacular info');
      }

      await UserModel.create({ name, email, auth0Id: sub, spoonacular: spoonacularInfo });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('Error creating User:', e);
    }
  }

  return session;
}

const authHandler = handleAuth({
  async callback(req, res) {
    try {
      await handleCallback(req, res, {
        afterCallback,
      });
    } catch (error) {
      res.status(error.status || 500).end(error.message);
    }
  },
});

export default connectDB(authHandler);
