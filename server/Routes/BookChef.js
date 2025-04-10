const express = require("express");
const router = express.Router();
const Bookchef = require("../models/Bookchef");
require("dotenv").config();
const nodemailer = require("nodemailer");
const accountSid = process.env.TWID_ACC_SID;
const authToken = process.env.TWID_AUTH_TOKEN;

const client = require("twilio")(accountSid, authToken);

//http://localhost:8080/bookchef/book
router.post("/book/:Chef_id/:chId", async (req, res) => {
  const sendSMS = async (body, phone) => {
    console.log(body);
    let msgOptions = {
      from: process.env.TWID_NUMBER,
      // to: process.env.MY_NUMBER,
      to: `+91${phone}`,
      body,
    };
    try {
      const message = await client.messages.create(msgOptions);
      console.log(message);
    } catch (error) {
      console.error(error);
    }
  };
  try {
    const {chef_id, chID, name, email, phone, address } = req.body;

    console.log(req.body)
    const newBookchef = new Bookchef({
      Chef_id: chef_id,
      chId: chID,
      name: name,
      email: email,
      phone: phone,
      address: address,
    });
    await newBookchef.save();
    res.json(newBookchef);
    sendSMS(
      ` Dear ${name} ,Your booking is confirmed for chef_id:- ${chef_id} Our team will Contact within 10 mins Thank you for chooseing us your Mom's Kitchen.ai`,
      phone
    );

    //nodemailer

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "wadile.abhishek7@gmail.com",
        pass: "pxrgpwkrqlyfrafu",
      },
    });

    var mailOptions = {
      from: "MOM'S KITCHEN.AI",
      to: email,
      subject: "Book Chef",
      text: ` Dear ${name} ,Your booking is confirmed for chef_id:- ${chef_id} Our team will Contact within 10 mins Thank you for chooseing us your Mom's Kitchen.ai`,
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        return res.send({Status:"Success",message:"Your chef is booked email"})
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
});

module.exports = router;
