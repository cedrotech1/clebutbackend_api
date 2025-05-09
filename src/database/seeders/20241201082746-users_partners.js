"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Partners", [
      {
        companyId: 1,
        name: "Tech Innovators",
        logo: "tech-innovators-logo.png",
        website: "https://www.techinnovators.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        companyId: 1,
        name: "Global FinTech Solutions",
        logo: "global-fintech-logo.png",
        website: "https://www.globalfintechsolutions.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        companyId: 1,
        name: "MediHealth Technologies",
        logo: "medihealth-tech-logo.png",
        website: "https://www.medihealthtech.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Partners", null, {});
  },
};
