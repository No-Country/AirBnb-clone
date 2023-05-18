import express from "express";
import { requireToken } from "../middlewares/requireToken.js";
import { requireRefreshToken } from "../middlewares/requireRefreshToken.js";
import {
  bodyLoginValidator,
  bodyRegisterValidator,
} from "../middlewares/validator.js";
import { infoUser, login, logout, refreshToken, registerUser } from "../controllers/users.js";

const router = express.Router();

router.post("/register", bodyRegisterValidator,registerUser);
router.post("/login", bodyLoginValidator,login);
router.post("/protected", requireToken,infoUser);
router.post("/refresh", requireRefreshToken, refreshToken);
router.post("/logout",logout);

export default router;
