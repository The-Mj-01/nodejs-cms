const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

module.exports = {
    secret : process.env.SESSION_SECRETKEY,
    resave : true,
    saveUninitialized : true,
    cookie : { expires : new Date(Date.now() + 20000) },
    store : new MongoStore({ mongooseConnection : mongoose.connection})
}