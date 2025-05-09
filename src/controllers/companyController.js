// const { Companies } = require("../models");
import db from "../database/models/index.js";
const { Companies, Services, Projects, FAQs, Users, Testimonials, Partners, ContactMessages} = db;
exports.createCompany = async (req, res) => {
  try {
    const company = await Companies.create(req.body);
    res.status(201).json({ success: true, message: "Company created", data: company });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};



exports.getCompanyWithAllAssociations = async (req, res) => {
  try {
    const company = await Companies.findByPk(req.params.id, {
      include: [
        { model: Services, as: "services" },
        { model: Projects, as: "projects" },
        { model: FAQs, as: "faqs" },
        { model: Users, as: "users", attributes: { exclude: ["password"] } },
        { model: Testimonials, as: "testimonials" },
        { model: Partners, as: "partners" },
        { model: ContactMessages, as: "contactMessages" },
      ],
    });

    if (!company) {
      return res.status(404).json({ success: false, message: "Company not found" });
    }

    res.status(200).json({ success: true, data: company });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};


exports.updateCompany = async (req, res) => {
  try {
    const company = await Companies.findByPk(req.params.id);
    if (!company) return res.status(404).json({ success: false, message: "Company not found" });

    await company.update(req.body);
    res.status(200).json({ success: true, message: "Company updated", data: company });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.deleteCompany = async (req, res) => {
  try {
    const company = await Companies.findByPk(req.params.id);
    if (!company) return res.status(404).json({ success: false, message: "Company not found" });

    await company.destroy();
    res.status(200).json({ success: true, message: "Company deleted" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
