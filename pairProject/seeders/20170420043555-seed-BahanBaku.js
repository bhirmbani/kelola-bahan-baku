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

    return queryInterface.bulkInsert('BahanBakus', [{
      nama: 'gula',
      unit: 'gram',
      keterangan: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama: 'telur',
      unit: 'butir',
      keterangan: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama: 'coklat bubuk',
      unit: 'gram',
      keterangan: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama: 'chocochips',
      unit: 'gram',
      keterangan: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama: 'terigu',
      unit: 'gram',
      keterangan: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama: 'minyak',
      unit: 'ml',
      keterangan: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama: 'keju',
      unit: 'gram',
      keterangan: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);


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
