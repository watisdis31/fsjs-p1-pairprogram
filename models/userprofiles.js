'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserProfile extends Model {
    static associate(models) {
      UserProfile.belongsTo(models.User,{
        foreignKey:"UserId"
      })
    }
  }
  UserProfile.init({
    UserId: DataTypes.INTEGER,
    userPost: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'UserProfile',
  });
  return UserProfile;
};