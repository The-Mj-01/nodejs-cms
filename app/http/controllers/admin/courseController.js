const controller = require('app/http/controllers/controller');

class courseController extends controller{
    index(req , res){
        res.render('admin/courses/index' , { title: 'دوره ها'});
    }

    create(req , res){
        res.render('admin/courses/create')
    }

    async store(req , res){
        let status = await this.validationData(req);
        if(!status){
            return this.back(req , res);
        }
        res.json('OK!');
        //Images
        //create course
    }
}

module.exports = new courseController();