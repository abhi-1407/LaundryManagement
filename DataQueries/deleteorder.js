const { connection } = require("./dbconfig.js");

function deleteorder(req, res, next) {
    let r = req.body.userid;
    const selectUsers = `DELETE FROM orders WHERE roll_num = ${r}`;
    connection.query(selectUsers, (error, results, fields) => {
        // console.log(error);
        // console.log('deleted');
        next();
});

}

module.exports = {
    deleteorder
};
