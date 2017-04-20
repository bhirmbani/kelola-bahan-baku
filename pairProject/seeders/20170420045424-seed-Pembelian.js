'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('Pembelians', [{
      tanggalBeli: "2017-03-25",
      idPenyimpanan: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      tanggalBeli: "2017-04-10",
      idPenyimpanan: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);


  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
