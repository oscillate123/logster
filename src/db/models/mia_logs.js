'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mia_logs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  mia_logs.init({
    time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    level: {
      type: DataTypes.STRING,
      allowNull: false
    },
    microservice: { 
      type: DataTypes.STRING, 
      defaultValue: "xyz" 
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    tableName: 'mia_logs',
    modelName: 'mia_logs',
  });
  return mia_logs;
};