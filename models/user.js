<<<<<<< HEAD
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     User.hasOne(models.UserProfile,{foreignKey:"UserId"})
     User.hasMany(models.Post,{foreignKey:"UserId"})
     User.belongsToMany(models.Community,{
        through:models.UserCommunity,
        foreignKey:"UserId"
     })
     
    }
  }
  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
=======
'use strict'
const bcrypt = require('bcryptjs')
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasOne(models.UserProfile)
      User.hasMany(models.Post)
    }
  }

  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: { msg: 'Email wajib diisi' },
        notEmpty: { msg: 'Email wajib diisi' },
        isEmail: { msg: 'Format email saalah' }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Password wajib diisi' },
        notEmpty: { msg: 'Password wajib diisi' },
        len: {
          args: [8],
          msg: 'Password minimal 8 karakter'
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: 'user'
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate(user) {
        const salt = bcrypt.genSaltSync(10)
        user.password = bcrypt.hashSync(user.password, salt)
      }
    }
  })

  return User
}
>>>>>>> 0662ec267ecefe01b1c51c0023547acdd3cef012
