const express = require("express");
const router = new express.Router();
const MensRank = require("../models/mens");

router.post("/mens", async (req, res) => {
  try {
    const addingRecords = new MensRank(req.body);

    console.log(req.body);

    const insertMensData = await addingRecords.save();
    res.status(201).send(insertMensData);

    // Because save returns us a promise
  } catch (e) {
    res.status(400).send(e);
  }
});

// Handling get request
router.get("/mens", async (req, res) => {
  try {
    const getRecords = await MensRank.find({}).sort({ ranking: 1 });
    res.send(getRecords);

    // Because save returns us a promise
  } catch (e) {
    res.status(400).send(e);
  }
});

// Handling get request with specific id
router.get("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getRecord = await MensRank.findById({ _id }); //document with provided id which is _id:_id
    res.send(getRecord);

    // Because save returns us a promise
  } catch (e) {
    res.status(400).send(e);
  }
});

// Handling updating record with the help of patch where we are using patch because we are targeting individual data
router.patch("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getRecord = await MensRank.findByIdAndUpdate(_id, req.body, {
      new: true,
    }); //document with provided id which is _id:_id
    res.send(getRecord);

    // Because save returns us a promise
  } catch (e) {
    res.status(500).send(e);
  }
});

// Handling delete request using individual id
router.delete("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getRecord = await MensRank.findByIdAndDelete(_id); //document with provided id which is _id:_id
    res.send(getRecord);

    // Because save returns us a promise
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
