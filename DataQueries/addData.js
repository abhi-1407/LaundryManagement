const { connection } = require("./dbconfig.js");

async function addData(na,pas) {
    const insertStatement = `INSERT INTO officials VALUES ('${na}','${pas}');`;

    try {
        await connection.query(insertStatement);
        console.log('Data inserted successfully.');
        next();
    } catch (error) {
        console.error('Error inserting data:', error);
    }
}

console.log('in addData');
module.exports = {
    addData
};
