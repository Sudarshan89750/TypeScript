import mongoose, { Schema, Document } from 'mongoose';

interface Product extends Document {
  name: string;
  price: number;
  description: string;
  stock: number;
  category?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const ProductSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    stock: { type: Number, default: 0 },
    category: { type: String },
  },
  { timestamps: true }
);

const ProductModel = mongoose.model<Product>("Product", ProductSchema);

export { Product, ProductModel };
