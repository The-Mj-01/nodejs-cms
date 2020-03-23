const controller = require('app/http/controllers/controller');

class indexController extends controller{
    index(req , res){
        res.render('admin/index');
    }

    courses(req , res){
        res.json('Course Page')
    }

}

module.exports = new indexController();