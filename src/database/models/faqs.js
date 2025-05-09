"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class FAQs extends Model {
    static associate(models) {
      FAQs.belongsTo(models.Companies, { foreignKey: "companyId" });
    }
  }

  FAQs.init(
    {
    companyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      question: DataTypes.STRING,
      answer: DataTypes.TEXT,
      order: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "FAQs",
    }
  );

  return FAQs;
};
