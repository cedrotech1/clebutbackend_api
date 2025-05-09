const express = require("express");
const router = express.Router();
const companyController = require("../controllers/companyController");

router.post("/", companyController.createCompany);
router.get("/:id", companyController.getCompanyWithAllAssociations);
router.put("/:id", companyController.updateCompany);
router.delete("/:id", companyController.deleteCompany);

module.exports = router;
