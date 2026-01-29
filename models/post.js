'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static getLatest(){
      return this.findAll({
        include:["User", "Community"],
        order:[["createdAt","DESC"]]
      })
    }
    static associate(models) {
      Post.belongsTo(models.User,{
        foreignKey:"UserId"
      })
      Post.belongsTo(models.Community,{
        foreignKey:"CommunityId"
      })
    }
  }
  Post.init({
    description:{
      type:DataTypes.TEXT,
      allowNull:false,
      validate:{
        notNull:{
          msg:"Description tidak boleh kosong"
        },
        notEmpty:{
          msg:"Description tidak boleh kosong"
        }
      }
    },
    imageUrl: {
      type:DataTypes.STRING,
      // allowNull:false,
      // validate:{
      //   notNull:{
      //     msg:"Image URL tidak boleh kosong"
      //   },
      //   notEmpty:{
      //     msg:"Image URL tidak boleh kosong"
      //   },
      //   isUrl:{
      //     msg: "Image URL harus berupa URL yang valid"
      //   }
      // }
    },
    totalLike: {
      type:DataTypes.INTEGER,
      defaultValue: 0
    },
    UserId: DataTypes.INTEGER,
    userComment: DataTypes.TEXT,
    CommunityId:{
      type:DataTypes.INTEGER,
      allowNull:true
    }
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};