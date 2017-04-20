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
        BahanBeli.belongsTo(models.BahanBaku, {foreignKey: "idBahanBaku"});
        BahanBeli.belongsTo(models.Pembelian, {foreignKey: "idPembelian"});
      }
    }
  });
  return BahanBeli;
};
