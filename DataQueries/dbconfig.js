const mysql = require('mysql');
require('dotenv').config();
const connection = mysql.createConnection({
  // host     :process.env.host,
  // database :process.env.name,
  // user     :process.env.user,
  // password :process.env.password,
  // port     :process.env.port,
  
  host:'b2slhhcyfrpnjjbpe8b0-mysql.services.clever-cloud.com',
  database:'b2slhhcyfrpnjjbpe8b0',
  user:'ubt4lodbcobxy5ec',
  password:'UOYVsbOMwbvQbh2aVRpQ',
  port:3306,
});


connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ', err);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});
module.exports = {connection};
