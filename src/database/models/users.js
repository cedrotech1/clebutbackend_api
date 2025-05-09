"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
   
      Users.belongsTo(models.Companies, {
        foreignKey: "companyId",
        as: "company",
      });
      Users.hasMany(models.SocialMedias, {
        foreignKey: "ownerId",
        constraints: false,
        scope: {
          ownerType: "user",
        },
        as: "socialMedias",
      });
    }
  }

  Users.init(
    {
      companyId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      email: { type: DataTypes.STRING, unique: true },
      password: DataTypes.STRING,
      phone: { type: DataTypes.STRING, unique: true },
      gender: DataTypes.STRING,
      code: DataTypes.STRING,
      status: DataTypes.STRING,
      image: DataTypes.STRING,
      title: DataTypes.STRING,
      bio: DataTypes.TEXT,
      role: {
        type: DataTypes.ENUM("member", "system_admin", "company_admin"),
        allowNull: false,
      }
      
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
