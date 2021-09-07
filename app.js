const express = require('express');
const app = express();
const mongoose = require('mongoose');
var session = require('express-session');
var MongoDBStore = require('connect-mongodb-session')(session);

require('dotenv').config();

const port = process.env.PORT;

const store = new MongoDBStore({
    uri: 'mongodb://localhost:27017/quiz',
    collection: 'mySessions'
  });

// Catch errors
store.on('error', function(error) {
    console.log(error);
  });

app.use(require('express-session')({
    secret: 'This is a secret',
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
    },
    store: store,
    // Boilerplate options, see:
    // * https://www.npmjs.com/package/express-session#resave
    // * https://www.npmjs.com/package/express-session#saveuninitialized
    resave: true,
    saveUninitialized: true
}));

//Serving Static files
app.use(express.static('public'));

//Ejs initialization
app.set('view engine', 'ejs');

// Parser From Req.body
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Enable the CORS
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Methods',
        'GET, PUT, POST, DELETE, OPTIONS'
    );
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

// Database connection
const connectDB = async () => {
    try {
        await mongoose.connect( process.env.DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB connected!!');
    } catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }
};
connectDB();

//Routes
const viewRouter = require('./app/routes/views')
const leaderRouter = require('./app/routes/leaderboard')
app.use('/', viewRouter);
app.use('/', leaderRouter);


// Server Start
app.listen(port, () => {
    console.log(`API Running at http://localhost:${port}`);
});