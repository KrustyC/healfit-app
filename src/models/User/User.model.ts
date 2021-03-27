import mongoose, { Model } from 'mongoose';
import { UserSchema } from './User.schema';
import { UserSchemaType } from './User.types';

const UserModel =
  mongoose.models.User || mongoose.model<UserSchemaType, Model<UserSchemaType>>('User', UserSchema);

export { UserModel };
