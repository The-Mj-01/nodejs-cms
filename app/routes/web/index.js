const express = require('express');
const router = express.Router();

//Middlewares
const redirectIfAuthenticated =require('app/http/middleware/redirectIfAuthenticated');
const redirectIfNotAdmin = require('app/http/middleware/redirectIfNotAdmin');
const errorHandler = require('app/http/middleware/errorHandler');
// const globalVariables = require('app/http/middleware/globalVariables');
//
// router.use(globalVariables.handle);


//Admin router
const adminRouter = require('app/routes/web/admin');
router.use('/admin', redirectIfNotAdmin.handle , adminRouter);

//Home router
const homeRouter = require('app/routes/web/home');
router.use('/', homeRouter);



//Auth Router
const authRouter = require('app/routes/web/auth');
router.use('/auth', redirectIfAuthenticated.handle , authRouter);

//Handle Errors
router.all('*' , errorHandler.error404 );
router.use(errorHandler.handler);



module.exports = router;