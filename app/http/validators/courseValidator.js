const validator = require('./validator');
const { check } = require('express-validator/check');

class courseValidator extends validator {
    handle(){
        return [
            check('title')
                .not().isEmpty()
                .withMessage('فیلد عنوان نمی تواند خالی بماند')
                .isLength({ min : 5 })
                .withMessage('فیلد عنوان نمی تواند کمتر از ۵ کاراکتر باشد'),

            check('type')
                .not().isEmpty()
                .withMessage('فیلد نوع دوره نمی تواند خالی بماند'),
            check('body')
                .not().isEmpty()
                .withMessage('متن دوره نمی تواند خالی بماند')
                .isLength({ min : 20 })
                .withMessage('متن دوره نمی تواند کمتر از ۸ کاراکتر باشد'),
            check('price')
                .not().isEmpty()
                .withMessage('قیمت دوره نمی تواند خالی بماند'),
            check('tags')
                .not().isEmpty()
                .withMessage('فیلد تگ نمی تواند خالی بماند'),


        ]
    }
}


module.exports = new courseValidator();


// req.checkBody('email' , 'فیلد ایمیل نمی تواند خالی بماند').notEmpty();
// req.checkBody('email' , 'فیلد ایمیل معتبر نیست').isEmail();
// req.checkBody('password' , 'فیلد پسورد نمی تواند خالی بماند').notEmpty();
// req.checkBody('password' , 'فیلد پسورد نمی تواند کمتر از ۸ کاراکتر باشد').isLength({ min:8 });