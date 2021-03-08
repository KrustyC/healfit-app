import { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';

const { MONGODB_URI } = process.env;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

type Handler = (req: NextApiRequest, res: NextApiResponse) => unknown;

export const connectDB = (handler: Handler) => (
  req: NextApiRequest,
  res: NextApiResponse
): unknown => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return handler(req, res);
  }
  // Use new db connection

  mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useNewUrlParser: true,
  });

  return handler(req, res);
};
