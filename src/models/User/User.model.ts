import mongoose, { Model } from 'mongoose';
import { UserSchemaType } from './User.types';
import { UserSchema } from './User.schema';

export const UserModel = mongoose.model<UserSchemaType, Model<UserSchemaType>>('User', UserSchema);
