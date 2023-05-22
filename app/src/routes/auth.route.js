import express from "express";
import { requireToken } from "../middlewares/requireToken.js";
import { requireRefreshToken } from "../middlewares/requireRefreshToken.js";
import {
  bodyLoginValidator,
  bodyRegisterValidator,
} from "../middlewares/validator.js";
import authController from '../controllers/auth.controller.js';

const router = express.Router();

router.post("/register", bodyRegisterValidator,authController.registerUser);
router.post("/login", bodyLoginValidator,authController.login);
router.post("/protected", requireToken,authController.infoUser);
router.post("/refresh", requireRefreshToken,authController.refreshToken);
router.post("/logout",authController.logout);
router.get("/session/auth0/google/", authController.googleOauthHandler)

export default router;
