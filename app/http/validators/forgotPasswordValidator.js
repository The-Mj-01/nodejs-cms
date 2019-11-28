const validator = require('./validator');
const { check } = require('express-validator/check');

class forgotPasswordValidator extends validator {
    handle(){
        return [
            check('email')
                .not().isEmpty()
                .withMessage('فیلد ایمیل نمی تواند خالی بماند')
                .isEmail()
                .withMessage('فیلد ایمیل معتبر نیست'),
        ]
    }
}


module.exports = new forgotPasswordValidator();


// req.checkBody('email' , 'فیلد ایمیل نمی تواند خالی بماند').notEmpty();
// req.checkBody('email' , 'فیلد ایمیل معتبر نیست').isEmail();
// req.checkBody('password' , 'فیلد پسورد نمی تواند خالی بماند').notEmpty();
// req.checkBody('password' , 'فیلد پسورد نمی تواند کمتر از ۸ کاراکتر باشد').isLength({ min:8 });