import { Document } from "mongoose";

export interface Product extends Document {
  name: string;
  price: number;
  description?: string;
  stock: number;
  category?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
