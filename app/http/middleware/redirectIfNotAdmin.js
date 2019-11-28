const User = require('app/models/user');
const middleware = require('./middleware');



class redirectIfNotAdmin extends middleware{
    handle(req , res , next){
        if(req.isAuthenticated() && req.user.admin)
            return next();

        return res.redirect('/');

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

module.exports = new redirectIfNotAdmin();