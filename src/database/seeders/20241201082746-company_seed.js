'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Companies', [
      {
        company_name: 'Clebut',
        slogan: 'Innovating the Future',
        logo: 'clebut_logo.png',
        email: 'info@clebut.com',
        phone: '250788000000',
        address: 'Huye, Rwanda',
        about: 'Clebut is a dynamic tech-driven organization focused on digital innovation and community empowerment.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
     
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Companies', null, {});
  }
};
