'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Community extends Model {
    static associate(models) {
      Community.belongsToMany(models.User,{
        through:models.UserCommunity,
        foreignKey:"CommunityId"
      })
      Community.hasMany(models.Post,{foreignKey:"CommunityId"})
      
    }
  }
  Community.init({
    communityName: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Community',
  });
  return Community;
};