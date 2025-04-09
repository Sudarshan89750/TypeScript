export interface Order {
  orderId: string;
  userId: string;
  productName: string;
  status: "pending" | "shipped" | "delivered" | "cancelled";
}

export class OrderDto {
  orderId: string;
  userId: string;
  productName: string;
  status: "pending" | "shipped" | "delivered" | "cancelled";

  constructor(data: Order) {
    if (!data.orderId || typeof data.orderId !== "string") {
      throw new Error("Invalid 'orderId': Must be a non-empty string.");
    }
    if (!data.userId || typeof data.userId !== "string") {
      throw new Error("Invalid 'userId': Must be a non-empty string.");
    }
    if (!data.productName || typeof data.productName !== "string") {
      throw new Error("Invalid 'productName': Must be a non-empty string.");
    }
    if (
      !["pending", "shipped", "delivered", "cancelled"].includes(data.status)
    ) {
      throw new Error(
        "Invalid 'status': Must be one of 'pending', 'shipped', 'delivered', or 'cancelled'."
      );
    }

    this.orderId = data.orderId.trim();
    this.userId = data.userId.trim();
    this.productName = data.productName.trim();
    this.status = data.status;
  }
}
