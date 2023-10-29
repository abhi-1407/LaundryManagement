const { connection } = require("./dbconfig.js");
const { getDate, getTime } = require("../public/getDateTime.js");

async function addOrderData(roll_num, d, t, jean, shirt, tshirt, bedsheet) {
    const insertStatement = `INSERT INTO orders VALUES (${roll_num}, '${d}', '${t}', ${jean}, ${shirt}, ${tshirt}, ${bedsheet});`;
    await connection.query(insertStatement, (error, results, fields) => {
    });
}

module.exports = {
    addOrderData
};
