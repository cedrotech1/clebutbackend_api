"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Services extends Model {
    static associate(models) {
      Services.belongsTo(models.Companies, { foreignKey: "companyId" });
    }
  }

  Services.init(
    {
      companyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      icon: DataTypes.STRING,
      order: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Services",
    }
  );

  return Services;
};
