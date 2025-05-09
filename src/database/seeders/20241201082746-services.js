"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Services", [
      {
        companyId: 1,
        title: "Software Development",
        description: "Custom software solutions designed to address your specific business challenges and streamline operations.",
        icon: "software-development-icon.png",
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        companyId: 1,
        title: "IT Consulting",
        description: "Strategic guidance to help you leverage technology effectively and make informed decisions for your business.",
        icon: "it-consulting-icon.png",
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        companyId: 1,
        title: "Training & Development",
        description: "Comprehensive training programs to equip your team with the skills needed to thrive in today's digital landscape.",
        icon: "training-development-icon.png",
        order: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        companyId: 1,
        title: "Digital Transformation",
        description: "End-to-end solutions to help your organization embrace digital technologies and stay competitive.",
        icon: "digital-transformation-icon.png",
        order: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        companyId: 1,
        title: "Project Management",
        description: "Expert project management services to ensure your IT initiatives are delivered on time and within budget.",
        icon: "project-management-icon.png",
        order: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        companyId: 1,
        title: "IT Infrastructure",
        description: "Robust infrastructure solutions to provide a solid foundation for your business operations and growth.",
        icon: "it-infrastructure-icon.png",
        order: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Services", null, {});
  },
};
