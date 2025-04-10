const express = require('express'); 
const router = express.Router();
const Razorpay = require("razorpay")

router.post('/orders', async(req, res) => {
    const razorpay = new Razorpay({
        key_id: "rzp_test_9xdmZH9A5sqNqO",
        key_secret: "NELoBFF8MmIkK8bttzHRZSuL"
    })

    const options = {
        amount: req.body.amount,
        currency: req.body.currency,
        receipt: "receipt#1",
        payment_capture: 1
    }

    try {
        const response = await razorpay.orders.create(options)

        res.json({
            order_id: response.id,
            currency: response.currency,
            amount: response.amount
        })
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal server error")
    }
})

router.get("/payment/:paymentId", async(req, res) => {
    const {paymentId} = req.params;

    const razorpay = new Razorpay({
        key_id: "rzp_test_9xdmZH9A5sqNqO",
        key_secret: "NELoBFF8MmIkK8bttzHRZSuL"
    })
    
    try {
        const payment = await razorpay.payments.fetch(paymentId)

        if (!payment){
            return res.status(500).json("Error at razorpay loading")
        }

        res.json({
            status: payment.status,
            method: payment.method,
            amount: payment.amount,
            currency: payment.currency
        })
    } catch(error) {
        res.status(500).json("failed to fetch")
    }
})

module.exports=router;