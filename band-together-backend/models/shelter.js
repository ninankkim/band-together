'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shelter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Shelter.init({
    name: DataTypes.TEXT,
    address: DataTypes.TEXT,
    phoneNumber: DataTypes.TEXT,
    lgbtFriendly: DataTypes.BOOLEAN,
    womenAndChildren: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Shelter',
  });
  return Shelter;
};