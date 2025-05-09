"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("FAQs", [
      {
        companyId: 1,
        question: "What services does CLÉ-BUT EXPERTS offer?",
        answer:
          "CLÉ-BUT EXPERTS offers a comprehensive range of IT services including software development, IT consulting, training and development, digital transformation, project management, and IT infrastructure solutions.",
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        companyId: 1,
        question: "How can I request a consultation?",
        answer:
          "You can request a consultation by filling out the contact form on this page, calling our office directly, or sending us an email. Our team will get back to you within 24 hours to schedule a meeting.",
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        companyId: 1,
        question: "Do you offer customized solutions?",
        answer:
          "Yes, we specialize in creating customized IT solutions tailored to meet the specific needs and challenges of your organization. We work closely with you to understand your requirements and develop solutions that align with your business goals.",
        order: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        companyId: 1,
        question: "What industries do you serve?",
        answer:
          "We serve a wide range of industries including finance, healthcare, education, government, manufacturing, and more. Our expertise allows us to deliver effective solutions across various sectors.",
        order: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        companyId: 1,
        question: "How long does a typical project take?",
        answer:
          "The timeline for a project depends on its scope and complexity. During our initial consultation, we'll provide you with a detailed project plan including estimated timelines. We're committed to delivering high-quality solutions within agreed-upon timeframes.",
        order: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("FAQs", null, {});
  },
};
