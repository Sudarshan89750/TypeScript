import { Router } from "express";
import ProductService from "../../services/ProductService";
import { ProductDto } from "../../services/ProductService";
const router = Router();

router.post("/", async (req, res) => {
  try {
    const dto = new ProductDto(req.body); // Validate DTO before processing
    const product = await ProductService.createProduct(dto);
    res.status(201).json({ dto, data: product });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (_req, res) => {
  try {
    const products = await ProductService.getProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve products" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await ProductService.getProductById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.status(200).json({ dto: req.params.id, data: product });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const dto = new ProductDto(req.body);
    const product = await ProductService.updateProduct(req.params.id, dto);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.status(200).json({ dto, data: product });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const success = await ProductService.deleteProduct(req.params.id);
    if (!success) return res.status(404).json({ error: "Product not found" });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
