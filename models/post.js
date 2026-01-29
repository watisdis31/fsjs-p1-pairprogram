"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {

  class Post extends Model {
    static async getLatest() {
  const { User } = this.sequelize.models;
  return await this.findAll({
    include: { model: User, attributes: ["id", "username"] },
    order: [["createdAt", "DESC"]],
  });
}

    static associate(models) {
      Post.belongsTo(models.User, {
        foreignKey: "UserId",
      });
      Post.belongsTo(models.Community, {
        foreignKey: "CommunityId",
      });
    }
  }
  Post.init(
    {
      description: DataTypes.TEXT,
      imageUrl: DataTypes.STRING,
      totalLike: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      UserId: DataTypes.INTEGER,
      userComment: DataTypes.TEXT,
      CommunityId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Post",
    },
  );
  return Post;
};
