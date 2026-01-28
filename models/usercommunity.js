'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserCommunity extends Model {
    static associate(models) {
      UserCommunity.belongsTo(models.User,{
        foreignKey:"UserId"
      });
      UserCommunity.belongsTo(models.Community,{foreignKey:"CommunityId"})
    }
  }
  UserCommunity.init({
    CommunityId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserCommunity',
  });
  return UserCommunity;
};