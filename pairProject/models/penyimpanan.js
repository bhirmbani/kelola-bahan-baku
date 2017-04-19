'use strict';
module.exports = function(sequelize, DataTypes) {
  var Penyimpanan = sequelize.define('Penyimpanan', {
    tempat: DataTypes.STRING,
    keterangan: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Penyimpanan.hasMany(models.Pembelian, {foreignKey: 'idPenyimpanan'});
      }
    }
  });
  return Penyimpanan;
};
