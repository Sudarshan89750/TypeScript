import {
  AuthUser as user,
  AuthUserDto as dto,
} from "@/interfaces/AuthUser.interface";
import User from "../models/AuthUser";

export class AuthService {
  async createUser(user: user): Promise<user> {
    const validatedUser = new dto(user);
    const newUser = new User(validatedUser);
    const savedUser = await newUser.save();
    return savedUser.toObject() as user;
  }

  async getUsers(): Promise<user[]> {
    return (await User.find().lean()) as user[];
  }

  async getUserById(id: string): Promise<user | null> {
    if (!id) {
      throw new Error("Id is required");
    }
    if (typeof id !== "string") {
      throw new Error("Id must be a string");
    }
    return (await User.findById(id).lean()) as user;
  }

  async updateUser(id: string, user: user): Promise<user | null> {
    if (!id) {
      throw new Error("Id is required");
    }
    if (typeof id !== "string") {
      throw new Error("Id must be a string");
    }
    const validatedUser = new dto(user);
    const updatedUser = await User.findByIdAndUpdate(id, validatedUser, {
      new: true,
    });
    return updatedUser ? (updatedUser.toObject() as user) : null;
  }

  async deleteUser(id: string): Promise<boolean> {
    const result = await User.findByIdAndDelete(id);
    return !!result;
  }

  async findUserByName(name: string): Promise<user | null> {
    return (await User.findOne({ name }).lean()) as user;
  }
}
