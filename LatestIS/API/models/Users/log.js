// models/Log.js

const { DataTypes } = require('sequelize');
const sequelize = require('../../utils/database');

const backend_logs = sequelize.define('backend_logs', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    errorMsg: {
        type: DataTypes.STRING,
        allowNull: false
    },
    currentUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dated: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

module.exports =backend_logs;