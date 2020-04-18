'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    title: DataTypes.STRING,
    rate: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    price: DataTypes.STRING,
    brand: DataTypes.STRING,
    detail_product: DataTypes.TEXT,
    colors: DataTypes.JSON,
    capacities: DataTypes.JSON,
    file: DataTypes.STRING
  }, {});
  product.associate = function(models) {
    // associations can be defined here
  };
  return product;
};