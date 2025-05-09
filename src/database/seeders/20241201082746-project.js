"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Projects", [
      {
        companyId: 1,
        title: "Digital Banking Platform",
        client_name: "Global Financial Services",
        description: "Developed a secure and scalable online banking platform to enhance digital customer experience.",
        category: "Finance",
        image: "banking-platform.png",
        outcome: "Increased customer engagement by 45% within six months.",
        slug: "digital-banking-platform",
        status: "published",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        companyId: 1,
        title: "Education Management System",
        client_name: "National Education Board",
        description: "Designed and implemented a centralized education management portal for schools and institutions.",
        category: "Education",
        image: "education-system.png",
        outcome: "Streamlined data management and reduced paperwork by 70%.",
        slug: "education-management-system",
        status: "published",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        companyId: 1,
        title: "Healthcare Teleconsultation App",
        client_name: "MediConnect Health",
        description: "Built a mobile app enabling remote doctor consultations, appointment scheduling, and prescriptions.",
        category: "Healthcare",
        image: "teleconsultation-app.png",
        outcome: "Enabled 24/7 access to medical care for over 10,000 patients.",
        slug: "healthcare-teleconsultation-app",
        status: "published",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Projects", null, {});
  },
};
