// models/Brand.js

const { DataTypes } = require('sequelize');
const sequelize = require('../../utils/database');

const Brand = sequelize.define('Brand', {
    brandName: {
        type: DataTypes.STRING(150),
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    Active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
}, {
    tableName: 'brands',
});

module.exports = Brand;
