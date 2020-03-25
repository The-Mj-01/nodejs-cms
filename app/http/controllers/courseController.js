const controller = require('./controller');
const User = require('app/models/user');
const Course = require('app/models/course');
const Episode = require('app/models/episode');
class courseController extends controller{
    async index(req , res){

        res.render('home/courses');
    }

    async single(req , res){
        console.log(req.params.course);
        let course = await Course.findOne({ slug : req.params.course })
                                .populate([
                                    {
                                        path : 'user' ,
                                        select : 'name'
                                    },
                                    {
                                        path : 'episodes',
                                        options : {
                                            sort : { number : 1 }
                                        }
                                    }
                                ]);
        return res.json(course)
        res.render('home/single-course' , { course });
    }
}

module.exports = new courseController();