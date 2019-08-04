const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const hotDog = require('./routes/hotDog');
const path = require('path');
const serveStatic = require('serve-static');

const app = express();
app.use(serveStatic(__dirname + "/dist"));
app.use(cors());


// Set up mongoose connection
const mongoose = require('mongoose');
const dev_db_url = 'mongodb+srv://admin:1111@cluster0-dnlhy.mongodb.net/HotDogs?retryWrites=true&w=majority';
const mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB, {useNewUrlParser: true, useFindAndModify: false})
    .then(() => console.log('Mongo is connected'))
    .catch((error) =>  console.log(error.message));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', hotDog);

const port =  process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});

