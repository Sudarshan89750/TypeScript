import { ProductModel } from "../model/Product";
import { ProductDTO, ProductMapper } from "../interfaces/ProductInterface";

class ProductService {
  async createProduct(data: ProductDTO) {
    const product = await ProductModel.create(data);
    return ProductMapper.toDTO(product);
  }

  async getAllProducts() {
    const products = await ProductModel.find();
    return products.map(ProductMapper.toDTO);
  }

  async getProductById(id: string) {
    const product = await ProductModel.findById(id);
    return product ? ProductMapper.toDTO(product) : null;
  }

  async updateProduct(id: string, data: Partial<ProductDTO>) {
    const product = await ProductModel.findByIdAndUpdate(id, data, { new: true });
    return product ? ProductMapper.toDTO(product) : null;
  }

  async deleteProduct(id: string) {
    const product = await ProductModel.findByIdAndDelete(id);
    return product !== null;
  }
}

const productService = new ProductService();
export { productService };
