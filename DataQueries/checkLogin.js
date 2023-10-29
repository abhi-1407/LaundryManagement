const { connection } = require("./dbconfig.js");
// import bcrypt from bcrypt;

function checkLogin(req, res, next) {
    let r = req.body.userid;
    let pas = req.body.password;
    //const hash=await bcrypt.hash(pass,13);
    const selectUsers = `SELECT * from officials WHERE name= '${r}' and password = '${pas}'`;
    connection.query(selectUsers, (error, results, fields) => {
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
