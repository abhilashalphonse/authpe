const billingService = require("../services/billingService");

exports.getAllBilling = async (req, res) => {
  try {
    const billing = await billingService.getAllBilling();
    res.json({ data: billing, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createBilling = async (req, res) => {
  try {
    const billing = await billingService.createBilling(req.body);
    res.json({ data: billing, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBillingById = async (req, res) => {
  try {
    const billing = await billingService.getBillingById(req.params.id);
    res.json({ data: billing, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateBilling = async (req, res) => {
  try {
    const billing = await billingService.updateBilling(req.params.id, req.body);
    res.json({ data: billing, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteBilling = async (req, res) => {
  try {
    const billing = await billingService.deleteBilling(req.params.id);
    res.json({ data: billing, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
