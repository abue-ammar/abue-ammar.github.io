// app/api/models/User.ts
import { Schema, model, models } from "mongoose";

export interface IUser {
  email: string;
  password: string;
}

const userSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Hashed password
});

const User = models.User || model<IUser>("User", userSchema);
export default User;
