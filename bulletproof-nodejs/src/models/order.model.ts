import { model, Schema } from "mongoose";
const orderSchema = new Schema(
  {
    orderId: { type: String, required: true },
    userId: { type: String, required: true },
    productName: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "shipped", "delivered", "cancelled"],
      default: "pending",
      required: true,
    },
  },
  { timestamps: true }
);

const Order = model("Order", orderSchema);
export default Order;
