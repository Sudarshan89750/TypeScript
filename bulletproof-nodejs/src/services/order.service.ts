import { OrderDto } from "@/interfaces/Order";
import OrderModel from "@/models/order.model";

export class OrderService {
  async createOrder(dto: OrderDto): Promise<OrderDto> {
    const order = new OrderModel(dto);
    const savedOrder = await order.save();
    return savedOrder.toObject() as OrderDto;
  }
  async getOrders(): Promise<OrderDto[]> {
    return (await OrderModel.find().lean()) as OrderDto[];
  }
  async getOrderById(id: string): Promise<OrderDto | null> {
    return (await OrderModel.findById(id).lean()) as OrderDto;
  }
  async updateOrder(id: string, dto: OrderDto): Promise<OrderDto | null> {
    const updatedOrder = await OrderModel.findByIdAndUpdate(id, dto, {
      new: true,
    });
    return updatedOrder ? (updatedOrder.toObject() as OrderDto) : null;
  }
  async deleteOrder(id: string): Promise<boolean> {
    const result = await OrderModel.findByIdAndDelete(id);
    return !!result;
  }
}

export default new OrderService();
