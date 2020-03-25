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
        let canUserUse = await this.canUse(req , course);
        return res.json(canUserUse)
        res.render('home/single-course' , { course });
    }
    async canUse(req , course){
        let canUse = false;
        if(req.isAuthenticated()){
            switch (course.type) {
                case 'vip':
                    canUse = req.user.isVip();
                    break;
                case 'cash':
                    canUse = req.user.checkLearning(course);
                    break;
                
                default:
                    canUse = true;
                    break;
            }
        }
        return canUse;

    }
}

module.exports = new courseController();