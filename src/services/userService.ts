import { User, IUser } from "../models/User";

export const createUser = async (userData: Partial<IUser>) => {
  const user = new User(userData);
  return await user.save();
};

export const getUsers = async () => {
  return await User.find();
};

export const getUserById = async (id: string) => {
  return await User.findById(id);
};

export const updateUser = async (id: string, userData: Partial<IUser>) => {
  return await User.findByIdAndUpdate(id, userData, { new: true });
};

export const deleteUser = async (id: string) => {
  return await User.findByIdAndDelete(id);
};
