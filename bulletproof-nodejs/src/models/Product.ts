import mongoose, { Schema, model } from "mongoose";
import { Product } from "../interfaces/Product";
const ProductSchema: Schema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    description: { type: String, required: true, trim: true },
    stock: { type: Number, required: true, min: 0 },
    category: { type: String, trim: true },
  },
  { timestamps: true }
);

export default model<Product>("Product", ProductSchema);
