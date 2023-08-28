const billingModel = require("../models/billing");

exports.getAllBilling = async () => {
  return await billingModel.find();
};

exports.createBilling = async (billing) => {
  return await billingModel.create(billing);
};
exports.getBillingById = async (id) => {
  return await billingModel.findById(id);
};

exports.updateBilling = async (id, billing) => {
  return await billingModel.findByIdAndUpdate(id, billing);
};

exports.deleteBilling = async (id) => {
  return await billingModel.findByIdAndDelete(id);
};
