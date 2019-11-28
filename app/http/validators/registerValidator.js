const validator = require('./validator');
const { check } = require('express-validator/check');

class registerValidator extends validator {
    handle(){
        return [
            check('name')
                .not().isEmpty()
                .withMessage('فیلد نام نمی تواند خالی بماند')
                .isLength({ min : 5 })
                .withMessage('فیلد نام نمی تواند کمتر از ۵ کاراکتر باشد'),

            check('email')
                .not().isEmpty()
                .withMessage('فیلد ایمیل نمی تواند خالی بماند')
                .isEmail()
                .withMessage('فیلد ایمیل معتبر نیست'),

            check('password')
                .not().isEmpty()
                .withMessage('فیلد پسورد نمی تواند خالی بماند')
                .isLength({ min : 8 })
                .withMessage('فیلد پسورد نمی تواند کمتر از ۸ کاراکتر باشد')
        ]
    }
}


module.exports = new registerValidator();





// req.checkBody('name' , 'فیلد نام نمی تواند خالی بماند').notEmpty();
// req.checkBody('name' , 'فیلد نام نمی تواند کمتر از ۵ کاراکتر باشد').isLength({ min:5 });
// req.checkBody('email' , 'فیلد ایمیل نمی تواند خالی بماند').notEmpty();
// req.checkBody('email' , 'فیلد ایمیل معتبر نیست').isEmail();
// req.checkBody('password' , 'فیلد پسورد نمی تواند خالی بماند').notEmpty();
// req.checkBody('password' , 'فیلد پسورد نمی تواند کمتر از ۸ کاراکتر باشد').isLength({ min:8 });