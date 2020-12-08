'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DonationCenter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DonationCenter.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      latitude: DataTypes.FLOAT,
      longitude: DataTypes.FLOAT,
      phone_number: DataTypes.STRING,
      hours: DataTypes.STRING,
      category: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'DonationCenter',
    }
  );
  return DonationCenter;
};
