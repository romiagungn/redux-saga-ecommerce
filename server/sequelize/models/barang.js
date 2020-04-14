'use strict';
module.exports = (sequelize, DataTypes) => {
  const barang = sequelize.define('barang', {
    title: DataTypes.STRING,
    rate: DataTypes.INTEGER,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    brand: DataTypes.STRING,
    detail_product: DataTypes.STRING
  }, {});
  barang.associate = function(models) {
    // associations can be defined here
  };
  return barang;
};