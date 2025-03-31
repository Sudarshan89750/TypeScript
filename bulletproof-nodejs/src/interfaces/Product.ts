import mongoose from "mongoose";

export interface Product extends mongoose.Document {
  name: string;
  price: number;
  description: string;
  stock: number;
  category?: string;
}
