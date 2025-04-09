import { Router, Request, Response, NextFunction } from "express";
import OrderService from "../../services/order.service";
import { OrderDto } from "../../interfaces/Order";

const router = Router();

router.post(
  "/create",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const orderDto = new OrderDto(req.body); // Validate and create an OrderDto
      const createdOrder = await OrderService.createOrder(orderDto);
      res.status(201).json(createdOrder);
    } catch (error) {
      next(error); // Pass the error to the error-handling middleware
    }
  }
);

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const orders = await OrderService.getOrders();
    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const order = await OrderService.getOrderById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const orderDto = new OrderDto(req.body); // Validate and create an OrderDto
    const updatedOrder = await OrderService.updateOrder(
      req.params.id,
      orderDto
    );
    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(updatedOrder);
  } catch (error) {
    next(error);
  }
});

router.delete(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const deleted = await OrderService.deleteOrder(req.params.id);
      if (!deleted) {
        return res.status(404).json({ message: "Order not found" });
      }
      res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
