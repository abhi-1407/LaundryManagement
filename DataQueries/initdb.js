const { connection } = require("./dbconfig.js");
// console.log(connection);

async function addData() {
  console.log(connection);
    const initStatement = 'CREATE TABLE orders (roll_num int(20) ,date varchar(20),time varchar(20), jean int(20) , shirt int(20) , tshirt int(20) , bedsheet int(20));';
    // const initStatement = 'CREATE TABLE officials (name varchar(20), password varchar(20));';
    // const initdbStatement = `INSERT into officials VALUES('Mangla','123456');`;
    //
    connection.query(initStatement, (error, results, fields) => {
        // console.log(error);
        // console.log(results);
        // console.log(fields);
        // console.log('/////////////////');
        console.log(results);
    });
    //
    // connection.query(initdbStatement,function(error, results, fields){
    //     // console.log(error);
    //     // console.log(results);
    //     // console.log(fields);
    //     // console.log('//////////////////////');
    //     console.log('created');
    // });
}
//
// // Call the addData function to execute it
addData();
// const People = sequelize.define("users", {
//     name: {
//         type: Sequelize.STRING(20),
//     },
//     roll_num: {
//         type: Sequelize.INTEGER,
//     },
//     phone_number: {
//         type: Sequelize.STRING(10),
//     },
//     password:{
//         type:sequelize.STRING(6),
//     }
//
// });
// const orders = sequelize.define("orders", {
//     roll_num: {
//         type: Sequelize.INTEGER,
//     },
//     date: {
//         type: Sequelize.VARCHAR(20),
//     },
//     time: {
//         type: Sequelize.VARCHAR(20),
//     },
//     jean: {
//         type: Sequelize.INTEGER,
//     },
//     shirt: {
//         type: Sequelize.INTEGER,
//     },
//     tshirt: {
//         type: Sequelize.INTEGER,
//     },
//     bedsheet: {
//         type: Sequelize.INTEGER,
//     },
//
// });
