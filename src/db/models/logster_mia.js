'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class logster_mia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  logster_mia.init({
    time: { 
      type: DataTypes.STRING,
      allowNull: false
    },
    level: { 
      type: DataTypes.STRING,
      allowNull: false
    },
    message: { 
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'logster_mia',
    modelName: 'logster_mia',
  });
  return logster_mia;
};