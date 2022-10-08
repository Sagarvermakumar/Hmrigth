const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();

const PORT = process.env.PORT || 4000;

const connectDB = require('../src/db/conn');
const router = require('./router/router');



//connect to databse
// connectDB();

//middleware
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, "../public"))); // serve public folder
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../templates/views'));
hbs.registerPartials(path.join(__dirname,'../templates/partials'));
app.use(router);



app.listen(PORT, () => {
    console.log(`server is runing at port ${PORT}`)
})