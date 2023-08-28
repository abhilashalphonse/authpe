const express = require("express");
const {
  getAllBilling,
  createBilling,
  getBillingById,
  updateBilling,
  deleteBilling,
} = require("../controllers/controller");

const router = express.Router();

router.route("/").get(getAllBilling).post(createBilling);
router.route("/:id").get(getBillingById).put(updateBilling).delete(deleteBilling);

module.exports = router;
