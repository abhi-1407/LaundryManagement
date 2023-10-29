const { connection } = require("./dbconfig.js");

async function checkorder(req, res, next) {
    let r = req.body.userid;
    const selectUsers = `SELECT * from orders WHERE roll_num = ${r}`;
    connection.query(selectUsers, (error, results, fields) => {
        console.log(results);
        req.orderresult=results;
        console.log(req.orderresult);
       next();
});
}
module.exports = {
    checkorder
};
