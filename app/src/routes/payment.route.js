import express from "express";
import { requireToken } from "../middlewares/requireToken.js";
import { requireRefreshToken } from "../middlewares/requireRefreshToken.js";
import PaymentController from "../controllers/payment.controller.js";
import PaymentService from "../service/payment.service.js";

const PaymentInstance = new PaymentController(new PaymentService())

const router = express.Router();

router.get('/', function(req,res,next){
    return res.json({
        "/payment":"generates a payment link"
    });
});

router.get("/paymentMp",requireToken, function (req, res, next) {
    PaymentInstance.getPaymentLink(req, res);
  });

export default router;