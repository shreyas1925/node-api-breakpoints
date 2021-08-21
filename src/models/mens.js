const express = require("express");
const mongoose = require("mongoose");
const mensSchema = mongoose.Schema({
  ranking: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  dob: {
    type: String,
    required: true,
    trim: true,
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
  score: {
    type: Number,
    required: true,
    trim: true,
  },
  event: {
    type: String,
    required: true,
    trim: true,
  },
});

// Creating our collection
const MensRank = new mongoose.model("MenRank", mensSchema);

module.exports = MensRank;
