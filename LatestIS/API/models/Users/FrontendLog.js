const { DataTypes } = require('sequelize');
const sequelize = require('../../utils/database');

const frontend_logs = sequelize.define('frontend_logs', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ErrorMsg: {
        type: DataTypes.STRING,
        allowNull: true
    },
    currentUrl: {
        type: DataTypes.STRING,
        allowNull: true
    },
    portal: {
        type: DataTypes.STRING,
        allowNull: true
    },
    dated: {
        type: DataTypes.DATE,
        allowNull: true
    },
});

module.exports = frontend_logs;
