import { Document } from 'mongoose';

export type UserSchemaType = Document & {
  // main identifiers
  name: string;
  email: string;

  spoonacular: {
    username: string;
    hash: string;
  };

  updatedAt: Date;
  createdAt: Date;
};
