const { connection } = require("./dbconfig.js");

function checkorder(req, res, next) {
    let r = req.body.userid;
    // let r=102;
    const selectUsers = `SELECT * from orders WHERE roll_num = ${r}`;
    connection.query(selectUsers, (error, results, fields) => {
        // console.log(error);
        console.log(results);
        req.orderresult=results;
        console.log(req.orderresult);
        next();
});
}
module.exports = {
    checkorder
};
