class PaymentController {
    constructor(subscriptionService) {
      this.subscriptionService = subscriptionService;
    }
  
    async getPaymentLink(req, res) {
      try {
        const body = req.body;
        const payment = await this.subscriptionService.createPayment(body);
        return res.redirect(200,(payment.init_point));
      } catch (error) {
        console.log(error);
        return res.status(500).json({ error: true, msg: "Failed to create payment" });
      }
    }
  }
  
export default PaymentController;