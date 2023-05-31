import axios from "axios"; 
import config from "../config/mongodb.js";

class PaymentService {
  async createPayment(items) {
    const url = "https://api.mercadopago.com/checkout/preferences";
    const body = {
      items: items,
      back_urls: {
        failure: "/failure",
        pending: "/pending",
        success: "http://localhost:3000/"
      }
    };

    const payment = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.accessTokenMercadoPago}`
      }
    });

    return payment.data;
  }
}

export default PaymentService;