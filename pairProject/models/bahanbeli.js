'use strict';
module.exports = function(sequelize, DataTypes) {
  var BahanBeli = sequelize.define('BahanBeli', {
    jumlah: DataTypes.INTEGER,
    tanggalExp: DataTypes.DATE,
    idBahanBaku: DataTypes.INTEGER,
    idStatus: DataTypes.INTEGER,
    idPembelian: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return BahanBeli;
};