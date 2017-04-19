'use strict';
module.exports = function(sequelize, DataTypes) {
  var Pembelian = sequelize.define('Pembelian', {
    tanggalBeli: DataTypes.DATE,
    idPenyimpanan: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Pembelian.belongsToMany(models.BahanBaku, {through: 'BahanBeli', foreignKey: 'idPembelian'});
        Pembelian.belongsToMany(models.Penyimpanan, {foreignKey: 'idPenyimpanan'});
      }
    }
  });
  return Pembelian;
};
