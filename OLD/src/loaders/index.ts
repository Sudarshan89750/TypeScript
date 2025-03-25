import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "../config/database";
import userRoutes from "../api/userRoutes";
import dotenv from "dotenv";

dotenv.config();

export const startServer = async () => {
  await connectDB();

  const app = express();
  app.use(cors());
  app.use(bodyParser.json());
  app.use("/api/users", userRoutes);

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
};
