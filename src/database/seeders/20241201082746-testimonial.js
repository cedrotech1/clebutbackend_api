"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Testimonials", [
      {
        companyId: 1,
        name: "Sarah Johnson",
        role: "CTO, Global Financial Services",
        feedback:
          "CLÉ-BUT EXPERTS has been an invaluable partner in our digital transformation journey. Their expertise and dedication have helped us achieve remarkable results.",
        image: "https://example.com/images/sarah-johnson.jpg", // Replace with actual image URL
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        companyId: 1,
        name: "Michael Chen",
        role: "Director of IT, National Education Board",
        feedback:
          "Working with CLÉ-BUT EXPERTS has been a game-changer for our organization. Their innovative solutions and strategic guidance have significantly improved our operational efficiency.",
        image: "https://example.com/images/michael-chen.jpg", // Replace with actual image URL
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Testimonials", null, {});
  },
};
