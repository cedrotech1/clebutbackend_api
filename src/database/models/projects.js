"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Projects extends Model {
    static associate(models) {
      Projects.belongsTo(models.Companies, { foreignKey: "companyId" });
    }
  }

  Projects.init(
    {
      companyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      title: DataTypes.STRING,
      client_name: DataTypes.STRING,
      description: DataTypes.TEXT,
      category: DataTypes.STRING,
      image: DataTypes.STRING,
      outcome: DataTypes.TEXT,
      slug: DataTypes.STRING,
      status: {
        type: DataTypes.STRING,
        defaultValue: "published",
      },
    },
    {
      sequelize,
      modelName: "Projects",
    }
  );

  return Projects;
};
