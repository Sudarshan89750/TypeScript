import mongoose, { Schema, model } from "mongoose";
import { Product } from "../interfaces/Product";

const ProductSchema = new Schema<Product>(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
      min: [0, "Price cannot be negative"],
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
      trim: true,
    },
    stock: { type: Number, default: 0, min: [0, "Stock cannot be negative"] },
    category: { type: String, trim: true },
  },
  { timestamps: true }
);

export default model<Product>("Product", ProductSchema);
