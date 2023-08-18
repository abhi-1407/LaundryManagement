const mysql = require('mysql');
const connection = mysql.createConnection({
  host     :process.env.host,
  database :process.env.name,
  user     :process.env.user,
  password :process.env.password,
  port     :process.env.port,
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ', err);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});
module.exports = {connection};
