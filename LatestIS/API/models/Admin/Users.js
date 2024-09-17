// models/User.js

const { DataTypes } = require('sequelize');
const sequelize = require('../../utils/database');

const User = sequelize.define('users', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
    },
  });

module.exports=User;