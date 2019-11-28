const controller = require('app/http/controllers/controller');
const passport = require('passport');



class registerController extends controller{

    showRegisterationForm(req , res){
        const title = 'صفحه عضویت' ;

        // console.log(formData);
        res.render('home/auth/register' , {
            // errors : req.flash('errors') ,
            recaptcha : this.recaptcha.render() ,
            title
        });
    }

    async registerProccess(req , res , next){
        // console.log(this.validationData(req));
        // this.recaptchaValidation(req , res)
        //     .then(result => this.validationData(req))
        //     .then(result => {
        //     // console.log(result)
        //     // res.json(result)
        //     if(result) this.register(req , res , next)
        //     else res.redirect('/auth/register');
        //     })
        //     .catch(err => console.log(err))
        // this.recaptcha.verify(req , (err , data) => {
        //     if(err){
        //         console.log(err);
        //         res.json('error')
        //     }else {
        //
        //     }
        // });


        await this.recaptchaValidation(req , res);
        let result =  await this.validationData(req);
        if(result){
            return this.register(req , res , next);
        }
        return this.back(req , res);

    }


    register(req , res , next){
        passport.authenticate('local.register' , {
            successRedirect : '/',
            failureRedirect : '/auth/register',
            failureFlash : true
        })(req , res , next);
    }


}

module.exports = new registerController();