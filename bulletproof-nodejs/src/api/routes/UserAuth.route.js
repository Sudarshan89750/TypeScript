import Router from "express";
import AuthService from "@/services/auth";

import { AuthUserDto, AuthUser } from "@/interfaces/AuthUser.interface";
const router=Router();
router.post("/login", async (req, res) => {
  const userData: AuthUserDto = req.body;
  try {
    const { accessToken, refreshToken } = await AuthService.login(userData);
    res.json({ accessToken, refreshToken });
  } catch (error) {
    res.status(401).json({ message: "Invalid credentials" });
  }
}
