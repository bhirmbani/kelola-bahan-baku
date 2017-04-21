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

    return queryInterface.bulkInsert('BahanBelis', [{
      jumlah: 10,
      tanggalExp: "2017-05-10",
      idBahanBaku: 1,
      idStatus: 1,
      idPembelian: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      jumlah: 20,
      tanggalExp: "2017-06-15",
      idBahanBaku: 2,
      idStatus: 1,
      idPembelian: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      jumlah: 30,
      tanggalExp: "2017-05-14",
      idBahanBaku: 3,
      idStatus: 1,
      idPembelian: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      jumlah: 50,
      tanggalExp: "2017-04-28",
      idBahanBaku: 4,
      idStatus: 1,
      idPembelian: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      jumlah: 60,
      tanggalExp: "2017-05-02",
      idBahanBaku: 5,
      idStatus: 1,
      idPembelian: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      jumlah: 70,
      tanggalExp: "2017-04-15",
      idBahanBaku: 6,
      idStatus: 1,
      idPembelian: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      jumlah: 80,
      tanggalExp: "2017-05-15",
      idBahanBaku: 7,
      idStatus: 1,
      idPembelian: 1,
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
