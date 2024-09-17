// models/Order.js

const { DataTypes } = require('sequelize');
const sequelize = require('../../utils/database');

const Order = sequelize.define('Order', {
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    total: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    dated: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    tableName: 'orders',
});

module.exports = Order;
