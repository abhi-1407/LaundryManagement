const { connection } = require("./dbconfig.js");
function getOrders(req, res, next) {
    if (req.allowUser == true) {
        const selectUsers = `SELECT * from orders WHERE roll_num = ${req.roll_num}`;
        connection.query(selectUsers, (error, results, fields) => {
            const orderData = [];

            results.forEach(element => {
                const data = {
                    userID: element.roll_num,
                    date: element.date,
                    time: element.time,
                    Bedsheet: element.bedsheet,
                    Jean: element.jean,
                    Tshirt: element.tshirt,
                    shirt: element.shirt
                };
                // console.log(data);
                orderData.push(data);
            });

            req.orders = orderData;
            next();
        });
    }
}

module.exports = {
    getOrders

};
