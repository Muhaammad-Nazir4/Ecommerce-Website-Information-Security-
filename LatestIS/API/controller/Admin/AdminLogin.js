// const jwt = require('jsonwebtoken');
// const crypto = require('crypto');
// const {connection}=require('../../utils/database');
// const logs=require('../Users/backendLogs');

// function GenerateToken(user) {
//     const payload = {
//         role: user.Role,
//         id: user.Id,
//     };
//     const token = jwt.sign(payload, '123456asdfghjkljasjdhgasdyt6rt2376tuasgd');
//     return token;
// }

// async function AdminLogin(req,response){
//     const email=req.body.email;
//     const password = crypto.createHash('sha256').update(req.body.password).digest('hex');
 
//     connection.query(`SELECT * FROM users WHERE email='${email}' and password='${password}' and Role='Admin'`,(err,res)=>{
//         if(err) {
//             logs.saveLogs(err.message,'/adminLogin');
//             return;
//         }
//         else{
//             if(res.length==0){
//                 return response.status(200).json({ message: "invalid" });
//             }
//             else{
//                 var token = GenerateToken(res);
//                 return response.status(200).json({
//                     message: 'success',
//                     email: email,
//                     username:res[0].username,
//                     userid: res[0].Id,
//                     token: token,
//                 });
//             }
//         }
//     })
// }

// module.exports={
//     AdminLogin,
// }


const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { User } = require('../../models/Admin/Users'); // Import the User model
const logs = require('../Users/backendLogs');

function GenerateToken(user) {
    const payload = {
        role: user.Role,
        id: user.Id,
    };
    const token = jwt.sign(payload, '123456asdfghjkljasjdhgasdyt6rt2376tuasgd');
    return token;
}

async function AdminLogin(req, response) {
    const email = req.body.email;
    const password = crypto.createHash('sha256').update(req.body.password).digest('hex');

    console.log(email,req.body.password)

    try {
        const user = await require('../../models/Admin/Users').findOne({
            where: {
              email,
              password,
              role: 'admin',
            },
          });

        console.log(user)

        if (!user) {
            return response.status(200).json({ message: "invalid" });
        } else {
            var token = GenerateToken(user);
            return response.status(200).json({
                message: 'success',
                email: email,
                username: user.username,
                userid: user.Id,
                token: token,
            });
        }
    } catch (error) {
        console.log(error.message)
        logs.saveLogs(error.message, '/adminLogin');
        return response.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = {
    AdminLogin,
};
