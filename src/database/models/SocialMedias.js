"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class SocialMedias extends Model {
    static associate(models) {
      SocialMedias.belongsTo(models.Users, {
        foreignKey: "ownerId",
        constraints: false,
        as: "user",
      });
      SocialMedias.belongsTo(models.Companies, {
        foreignKey: "ownerId",
        constraints: false,
        as: "company",
      });
    }

    static resolveAssociation(instance) {
      if (instance.ownerType === "user") {
        return "user";
      }
      if (instance.ownerType === "company") {
        return "company";
      }
      return null;
    }
  }

  SocialMedias.init(
    {
      platform: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ownerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ownerType: {
        type: DataTypes.ENUM("user", "company"),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "SocialMedias",
      
    }
  );

  return SocialMedias;
};
