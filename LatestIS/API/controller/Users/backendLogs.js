// const {connection}=require('../../utils/database');
// const strftime = require('strftime');

// async function saveLogs(msg,url){
//     const now = new Date();
//     const dateCreated = strftime('%Y-%m-%d %H:%M:%S', now);

//     const log={
//         ErrorMsg:msg,
//         currentUrl:url,
//         dated:dateCreated,
//     }

//     connection.query(`INSERT into backend_logs SET ? `,log,(err,res)=>{
//         if(err) throw err;
//         else{
//             console.log("Log saved");
//         }
//     })  
// }

// module.exports={
//     saveLogs,
// }


const backend_logs = require('../../models/Users/log');

async function saveLogs(msg, url) {
    try {
        const now = new Date();
        const dateCreated = now.toISOString(); // or format the date as you prefer

        await backend_logs.create({
            errorMsg: msg,
            currentUrl: url,
            dated: dateCreated,
        });

        console.log("Log saved");
    } catch (error) {
        console.error("Error saving log:", error);
    }
}

module.exports = {
    saveLogs,
};
