// const {connection}=require('../../utils/database');
// const logs=require('../Users/backendLogs');

// async function GetDashboard(req,response){
//     let brands=0;
//     let users=0;
//     let products=0;
//     let orders=0;
//     let revenue=0;

//     connection.query('SELECT * FROM brands',(err,res)=>{
//         if(err) {
//             logs.saveLogs(err.message,'/getDashboard');
//             return;
//         }
//         else{
//             brands=res.length;
//             connection.query('SELECT * FROM users',(err,res)=>{
//                 if(err) {
//                     logs.saveLogs(err.message,'/getDashboard');
//                     return;
//                 }
//                 else{
//                     users=res.length-1;
//                     connection.query('SELECT * FROM orders',(err,res)=>{
//                         if(err) {
//                             logs.saveLogs(err.message,'/getDashboard');
//                             return;
//                         }
//                         else{
//                             orders=res.length;
//                             connection.query('SELECT * FROM inventory',(err,res)=>{
//                                 if(err) {
//                                     logs.saveLogs(err.message,'/getDashboard');
//                                     return;
//                                 }
//                                 else{
//                                     products=res.length;
//                                     connection.query('SELECT SUM(total) as Total from orders',(err,res)=>{
//                                         if(err) {
//                                              logs.saveLogs(err.message,'/getDashboard');
//                                              return;
//                                         }
//                                         else{
//                                             revenue=res[0].Total;
//                                             return response.status(200).json({brands:brands,users:users,products:products,orders:orders,revenue:revenue});
//                                         }
//                                     })
//                                 }
//                             })
//                         }
//                     })
//                 }
//             })
//         }
//     })
// }

// module.exports={
//     GetDashboard,
// }

// getdashboard.js

// const { Brand, User, Order, Inventory } = require('../../models'); // Import Sequelize models
const Brand = require('../../models/Admin/Brand');
const User = require('../../models/Admin/Users');
const Inventory = require('../../models/Admin/Inventory');
const Order = require('../../models/Admin/Order');
const logs = require('../../models/Users/log');

async function GetDashboard(req, response) {
    try {
        // Fetch counts from each table
        const brandCount = await Brand.count();
        const userCount = await User.count();
        const productCount = await Inventory.count();
        const orderCount = await Order.count();

        // Calculate revenue
        const orderTotalResult = await Order.sum('total');
        const revenue = orderTotalResult || 0;

        // Return dashboard data in JSON format
        return response.status(200).json({
            brands: brandCount,
            users: userCount,
            products: productCount,
            orders: orderCount,
            revenue: revenue
        });
    } catch (error) {
        console.error(error.message);
        logs.saveLogs(error.message, '/getDashboard');
        return response.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = {
    GetDashboard,
};
