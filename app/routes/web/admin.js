const express = require('express');
const router = express.Router();


router.use((req, res , next)=>{
    res.locals.layout = "admin/master";
    next();
});

//Controllers
const adminController = require('app/http/controllers/admin/adminController');
const courseController = require('app/http/controllers/admin/courseController');

//validators
const courseValidator = require('app/http/validators/courseValidator');

//Admin routes
router.get('/', adminController.index);
router.get('/courses', courseController.index);
router.get('/courses/create' , courseController.create);
router.post('/courses/create', courseValidator.handle() , courseController.store);

module.exports = router;