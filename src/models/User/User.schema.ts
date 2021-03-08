import { Schema } from 'mongoose';
import { UserSchemaType } from './User.types';

export const UserSchema = new Schema<UserSchemaType>(
  {
    name: { type: 'String', required: true },
    email: { type: 'String', required: true },
    auth0Id: { type: 'String', required: true, unique: true },

    spoonacular: {
      username: { type: 'String', required: true },
      hash: { type: 'String', required: true },
    },
  },
  {
    autoIndex: true,
    timestamps: { createdAt: true, updatedAt: true },
    read: 'secondaryPreferred',
    collection: 'users',
  }
);

UserSchema.index({ email: 1 }, { unique: true });
