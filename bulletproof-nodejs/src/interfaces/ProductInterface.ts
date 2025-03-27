import { Product } from "../model/Product";

interface ProductDTO {
  name: string;
  price: number;
  description: string;
  stock: number;
}

const ProductMapper = {
  toDTO: (product: Product): ProductDTO => ({
    name: product.name,
    price: product.price,
    description: product.description,
    stock: product.stock,
  }),
};

export { ProductDTO, ProductMapper };
