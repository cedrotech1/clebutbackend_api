"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ContactMessages extends Model {
    static associate(models) {
      ContactMessages.belongsTo(models.Companies, { foreignKey: "companyId" });
    }
  }

  ContactMessages.init(
    {
    companyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      subject: DataTypes.STRING,
      message: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "ContactMessages",
    }
  );

  return ContactMessages;
};
    