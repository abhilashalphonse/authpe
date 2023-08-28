const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const billingSchema = new Schema({
  firstName: String,
  secondName: String,
  fullAddress: String,
  country: String,
  zipCode: String,
  amount: Number,
  usdt: Number,
  paymentMethod: String,
  TransactionId: Number,
  image: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("billing", billingSchema);
