import { model, Schema } from "mongoose";
import { Order } from "../interfaces/Order";
const orderSchema = new Schema(
  {
    orderId: {
      type: String,
      required: [true, "Order ID is required"],
    },
    userId: {
      type: String,
      required: [true, "User ID is required"],
    },
    productName: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },
    status: {
      type: String,
      enum: ["pending", "shipped", "delivered", "cancelled"],
      default: "pending",
      //   required: true,
    },
  },
  { timestamps: true }
);

const Order = model("Order", orderSchema);
export default Order;
