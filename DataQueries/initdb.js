const { connection } = require("./dbconfig.js");

async function addData() {
  console.log(connection);
    const initStatement = 'CREATE TABLE orders (roll_num int(20) ,date varchar(20),time varchar(20), jean int(20) , shirt int(20) , tshirt int(20) , bedsheet int(20)) ';
    connection.query(initStatement, (error, results, fields) => {
        console.log(results);
    });
    const initOfficial = 'CREATE TABLE official (na varchar(20),pas varchar(20)) ';
    connection.query(initOfficial, (error, results, fields) => {
        console.log(results);
    });
}

// // Call the addData function to execute it
addData();
