import ProductModel from "../models/Product";
import { Product } from "../interfaces/Product";

export class ProductDto {
  name: string;
  price: number;
  description: string;
  stock: number;
  category?: string;

  constructor(data: Product) {
    if (!data.name || typeof data.name !== "string") {
      throw new Error("Invalid 'name': Must be a non-empty string.");
    }
    if (typeof data.price !== "number" || data.price < 0) {
      throw new Error("Invalid 'price': Must be a positive number.");
    }
    if (!data.description || typeof data.description !== "string") {
      throw new Error("Invalid 'description': Must be a non-empty string.");
    }
    if (typeof data.stock !== "number" || data.stock < 0) {
      throw new Error("Invalid 'stock': Must be a non-negative number.");
    }
    if (data.category && typeof data.category !== "string") {
      throw new Error("Invalid 'category': Must be a string.");
    }

    this.name = data.name.trim();
    this.price = data.price;
    this.description = data.description.trim();
    this.stock = data.stock;
    this.category = data.category?.trim();
  }
}

class ProductService {
  async createProduct(dto: ProductDto): Promise<Product> {
    const product = new ProductModel(dto);
    await product.save();
    return product.toObject() as Product;
  }

  async getProducts(): Promise<Product[]> {
    return await ProductModel.find();
  }

  async getProductById(id: string): Promise<Product | null> {
    return await ProductModel.findById(id);
  }

  async updateProduct(id: string, dto: ProductDto): Promise<Product | null> {
    return await ProductModel.findByIdAndUpdate(id, dto, { new: true });
  }

  async deleteProduct(id: string): Promise<boolean> {
    const result = await ProductModel.findByIdAndDelete(id);
    return !!result;
  }
}

export default new ProductService();
