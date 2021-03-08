import { NextApiRequest, NextApiResponse } from 'next';

export default function healthHandler(_: NextApiRequest, res: NextApiResponse): void {
  res.status(200).json({ status: JSON.stringify('API are alive') });
}
