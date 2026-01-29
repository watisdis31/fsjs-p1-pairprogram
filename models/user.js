'use strict';
const {Model} = require('sequelize');
const bcrypt = require('bcryptjs')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
     User.hasOne(models.UserProfile,{foreignKey:"UserId"})
     User.hasMany(models.Post,{foreignKey:"UserId"})
     User.belongsToMany(models.Community,{
        through:models.UserCommunity,
        foreignKey:"UserId"
     })
    }

    validPassword(password) {
      return bcrypt.compareSync(password, this.password);
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {msg: 'Username is taken!'},
      validate: {
        notNull: { msg: 'Username required!' },
        notEmpty: { msg: 'Username required!' },
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: { msg: 'Email required!' },
        notEmpty: { msg: 'Email required!' },
        isEmail(value) {
          if (!value.includes('@')) throw new Error ('Email is not in the right format!');
        },
        async exists(value) {
          const user = await User.findOne({where: {email: value}});
          if (!user) throw new Error ('Email is not registered')
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Password required!' },
        notEmpty: { msg: 'Password required!' },
        len: {
          args: [8, 100],
          msg: 'Password minimal is 8 characters!'
        },
        async isValid(value) {
          if (!this._userInstance) return;
          const match = bcrypt.compareSync(value, this._userInstance.password);
          if (!match) throw new Error ('Wrong password');
        }
      }
    },
    role:{
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
  });
  return User;
};