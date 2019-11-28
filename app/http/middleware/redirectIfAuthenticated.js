const User = require('app/models/user');
const middleware = require('./middleware')



module.exports = new class redirectIfAuthenticated extends middleware{
    handle(req , res , next){
        if(req.isAuthenticated())
            return res.redirect('/');
        next();

    }
    // userFind(rememberToken , req , next){
    //     User.findOne({rememberToken})
    //         .then(user => {
    //             req.logIn(user , err =>{
    //                 if(err) next(err);
    //                 next();
    //             })
    //         })
    //         .catch(err => next(err));
    // }
}