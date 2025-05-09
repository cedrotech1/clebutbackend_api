"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Partners extends Model {
    static associate(models) {
      Partners.belongsTo(models.Companies, { foreignKey: "companyId" });
    }
  }

  Partners.init(
    {
    companyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: DataTypes.STRING,
      logo: DataTypes.STRING,
      website: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Partners",
    }
  );

  return Partners;
};
