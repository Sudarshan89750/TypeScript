import { Router } from "express";
const router = Router();
import { validateToken } from "../middleware/authMiddleware";
import { loginUser } from "../services/authService";

// Login Route
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const result = loginUser(username, password);

  if (result) {
    res.status(200).json({
      success: true,
      message: "Login successful",
      token: result.token,
    });
  } else {
    res.status(401).json({
      success: false,
      message: "Invalid username or password",
    });
  }
});

// Protected Route
router.get("/protected", validateToken, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the protected route!",
    user: req.user,
  });
});

export default router;
