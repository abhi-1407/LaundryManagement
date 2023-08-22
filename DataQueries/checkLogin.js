const { connection } = require("./dbconfig.js");

function checkLogin(req, res, next) {
    let r = req.body.userid;
    let pas = req.body.password;
    // console.log(r);
    // console.log(pas);
    // let r='Mangla';
    // let pas='123456';
    const selectUsers = `SELECT * from officials WHERE name= '${r}' and password = '${pas}'`;
    connection.query(selectUsers, (error, results, fields) => {
        // console.log(error);
        console.log(results);

        if (results.length > 0) {
            req.allowUser = true;
        } else {
            req.allowUser = false;
        }
        next();
    });
}

module.exports = {
    checkLogin
};
