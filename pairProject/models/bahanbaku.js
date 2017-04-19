'use strict';
module.exports = function(sequelize, DataTypes) {
  var BahanBaku = sequelize.define('BahanBaku', {
    nama: DataTypes.STRING,
    unit: DataTypes.STRING,
    keterangan: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        BahanBaku.belongsToMany(models.Pembelian, {through: 'BahanBeli', foreignKey: 'idBahanbaku'})
      }
    }
  });
  return BahanBaku;
};
