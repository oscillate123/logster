'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mia_logs_changelog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  mia_logs_changelog.init({
    time: { 
      type: DataTypes.STRING,
      allowNull: false
    },
    operation: { 
      type: DataTypes.STRING,
      allowNull: false
    },
    identity: { 
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mia_logs_changelog',
    modelName: 'mia_logs_changelog',
  });
  return mia_logs_changelog;
};