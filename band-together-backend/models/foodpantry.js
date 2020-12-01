'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FoodPantry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FoodPantry.init(
    {
      name: DataTypes.TEXT,
      address: DataTypes.TEXT,
      latitude: DataTypes.FLOAT,
      longitude: DataTypes.FLOAT,
      phone_number: DataTypes.STRING,
      hours: DataTypes.STRING,
      church_affiliated: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'FoodPantry',
    }
  );
  return FoodPantry;
};
