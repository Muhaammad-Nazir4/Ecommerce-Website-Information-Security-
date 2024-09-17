// models/Inventory.js

const { DataTypes } = require('sequelize');
const sequelize = require('../../utils/database');

const Inventory = sequelize.define('Inventory', {
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(400),
        allowNull: false,
    },
    brandId: {
        type: DataTypes.INTEGER,
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
    tableName: 'inventory',
});

module.exports = Inventory;
