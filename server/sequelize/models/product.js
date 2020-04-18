'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    title: DataTypes.STRING,
    rate: DataTypes.INTEGER,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    brand: DataTypes.STRING,
    detail_product: DataTypes.STRING,
    colors: DataTypes.STRING,
    capacities: DataTypes.STRING,
    file: DataTypes.STRING
  }, {});
  product.associate = function(models) {
    // associations can be defined here
  };
  return product;
};