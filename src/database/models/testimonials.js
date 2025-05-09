"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Testimonials extends Model {
    static associate(models) {
      Testimonials.belongsTo(models.Companies, { foreignKey: "companyId" });
    }
  }

  Testimonials.init(
    {
      companyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: DataTypes.STRING,
      feedback: DataTypes.TEXT,
      image: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Testimonials",
    }
  );

  return Testimonials;
};
