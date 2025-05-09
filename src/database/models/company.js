"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Companies extends Model {
    static associate(models) {
      Companies.hasMany(models.Services, { foreignKey: "companyId", as: "services" });
      Companies.hasMany(models.Projects, { foreignKey: "companyId", as: "projects" });
      Companies.hasMany(models.FAQs, { foreignKey: "companyId", as: "faqs" });
      Companies.hasMany(models.Users, { foreignKey: "companyId", as: "users" });
      Companies.hasMany(models.Testimonials, { foreignKey: "companyId", as: "testimonials" });
      Companies.hasMany(models.Partners, { foreignKey: "companyId", as: "partners" });
      Companies.hasMany(models.ContactMessages, { foreignKey: "companyId", as: "contactMessages" });
    }
  }

  Companies.init(
    {
      company_name: DataTypes.STRING,
      slogan: DataTypes.STRING,
      logo: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
      about: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Companies",
    }
  );

  return Companies;
};
