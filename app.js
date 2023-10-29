const express = require('express');
const bodyParser = require('body-parser');
const app = express();


const getDateTime = require("./public/getDateTime.js");
const {addData} = require(__dirname+'/DataQueries/addData.js');
const {checkLogin} = require(__dirname+'/DataQueries/checkLogin.js');
const {addOrderData} = require(__dirname+'/DataQueries/addOrders.js');
const {getOrders} = require(__dirname+'/DataQueries/getOrders.js');
const {checkorder} = require(__dirname+'/DataQueries/checkorder.js');
const {deleteorder} = require(__dirname+'/DataQueries/deleteorder.js');
const porders = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get("/checkorder", (req, res) => {
    res.render('Checkorder');
});

app.post("/check",checkorder,(req, res) => {
    var orderresult=req.orderresult;
    //console.log(req.orderresult);
    res.render('index', {orderresult});
});

app.get("/deleteorder", deleteorder, (req, res) => {
    res.render('deleteorder');
});

app.post("/deleteorder", deleteorder, (req, res) => {
    res.render('Checkorder');
});

app.get("/newUser", (req, res) => {
    res.render('pages-sign-up');
});

app.get("/home", (req, res) => {
    res.render('index',{orderresult: porders});
});

app.post("/home", (req, res) => {
    res.render('index',{orderresult: porders});
});
 
app.post("/newUser",  (req, res) => {
    addData(req.body.userid,req.body.password);
    res.redirect('/');
});

app.get("/", (req, res) => {
    console.log('/ route');
    res.render('signin');
});

app.post("/",checkLogin,(req, res) => {
    console.log('out post');
    if(req.allowUser==true){
        console.log('in post');
      res.render('index',{ orderresult: porders });
    }
    else{
      res.redirect('/');
    }

});

app.post("/orders", (req, res) => {
    const data = {
        userID: req.body.userID,
        date: getDateTime.getCurrentDate(),
        time: getDateTime.getCurrentTime(),
        Bedsheet: req.body.menshnum,
        Jean: req.body.menjenum,
        Tshirt: req.body.mentsnum,
        shirt: req.body.menshtnum
    };

    console.log(data);
    addOrderData(data.userID, data.date, data.time, data.Jean, data.shirt, data.Tshirt, data.Bedsheet);

    res.render('postOrders');
});

app.get("/orders", (req, res) => {
    res.render('postOrders');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});
