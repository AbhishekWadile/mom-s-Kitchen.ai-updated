const express = require("express");
const router = express.Router();
const GratingModel = require("../models/Grating");

//http://localhost:8080/grocery/postGrating
router.post("/postGrating", async (req, res) => {
  try {
    const gratings = new GratingModel({
      Rat_email: req.body.Rat_email,
      Rat_img: req.body.Rat_img,
      Rat_name: req.body.Rat_name,
      Rat: req.body.Rat,
      Rat_info: req.body.Rat_info,
      Rat_extrainfo: req.body.Rat_extrainfo,
    });

    const grating = await gratings.save();
    res.json(grating);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

//http://localhost:8080/grocery/getAllGrating
router.get("/getAllGrating", async (req, res) => {
  try {
    const Gratings = await GratingModel.find();
    res.json(Gratings);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = router;