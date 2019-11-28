const controller = require('app/http/controllers/controller');
const passport = require('passport');
const PasswordReset = require('app/models/password-reset');
const User = require('app/models/user');
const uniqueString = require('unique-string');




class forgotPasswordController extends controller{
    showForgotPassword(req , res){
        const title = 'فراموشی رمز عبور';
        res.render('home/auth/passwords/email', {
            // errors : req.flash('errors') ,
            recaptcha: this.recaptcha.render() ,
            title });
    }
    async sendPasswordResetLink(req , res , next){
        await this.recaptchaValidation(req , res);
        let result =  await this.validationData(req);
        if(result){
            return this.sendResetLink(req , res);
        }
        return this.back(req , res);



        // this.recaptchaValidation(req , res)
        //     .then(result => this.validationData(req))
        //     .then(result => {
        //         // console.log(result)
        //         // res.json(result)
        //         if(result) this.login(req , res , next);
        //         else res.redirect('/auth/login');
        //     })
        //     .catch(err => console.log(err));

    }

    async sendResetLink(req , res , next){
        let user = await User.findOne({ email : req.body.email });
        if(!user){
            req.flash('errors' , 'چنین کاربری وجود ندارد');
            return this.back(req , res);
        }

        const newPasswordReset = new PasswordReset({
            email : req.body.email,
            token : uniqueString()

        });

        let passwordReset = await newPasswordReset.save();
        if(passwordReset){

            //send mail

            // req.flash('success' , 'ایمیل بازیابی رمز عبور با موفقیت انجام شد');
            return  res.redirect('/');
        }

        throw  new Error('عملیات مورد نظر انجام نشد')
        // passport.authenticate('local.login' , (err , user) =>{
        //     if(!user) return res.redirect('/auth/login');
        //
        //     req.logIn(user , err =>{
        //         if(req.body.remember){
        //             user.setRememberToken(res);
        //
        //         }
        //
        //         return res.redirect('/')
        //     })
        // })(req , res , next);
    }

}

module.exports = new forgotPasswordController();