// const mysql = require('mysql');

// const connection = mysql.createConnection({
//   host: process.env.MYSQL_ADDON_HOST,
//   user: process.env.MYSQL_ADDON_USER,
//   password: process.env.MYSQL_ADDON_PASSWORD,
//   database: process.env.MYSQL_ADDON_DB,
//   port:process.env.MYSQL_ADDON_PORT,
// });

// connection.connect((err) => {
//   if (err) throw err;
//   console.log('Connected to MySQL database!');
// });

// module.exports={connection}


// utils/database.js

const { Sequelize, DataTypes } = require('sequelize');

// Check the environment variables
const {
  MYSQL_ADDON_USER,
  MYSQL_ADDON_PASSWORD,
  MYSQL_ADDON_DB,
  MYSQL_ADDON_PORT,
  MYSQL_ADDON_HOST,
} = process.env;

// console.log('MYSQL_ADDON_USER:', MYSQL_ADDON_USER);
// console.log('MYSQL_ADDON_PASSWORD:', MYSQL_ADDON_PASSWORD);
// console.log('MYSQL_ADDON_DB:', MYSQL_ADDON_DB);
// console.log('MYSQL_ADDON_PORT:', MYSQL_ADDON_PORT);
// console.log('MYSQL_ADDON_HOST:', MYSQL_ADDON_HOST);
// Create a connection string
const connectionString = `mysql://${MYSQL_ADDON_USER}:${MYSQL_ADDON_PASSWORD}@${MYSQL_ADDON_HOST}:${MYSQL_ADDON_PORT}/${MYSQL_ADDON_DB}`;

// Create Sequelize instance
const sequelize = new Sequelize(connectionString, {
  dialect: 'mysql',
});

// Check the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to the database successfully!');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
module.exports = sequelize;