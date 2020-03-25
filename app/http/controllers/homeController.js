const controller = require('./controller');
const User = require('app/models/user');
const Course = require('app/models/course');
const Episode = require('app/models/episode');
class homeController extends controller{
    async index(req , res){

        let courses = await Course.find({}).sort({ createAt : 1 , }).limit(8).exec();
        res.render('home/index', { courses });
    }
    async about(req , res){


        res.render('home/about' );
    }


}



// let user = await User.findById('5db850eaa06ab5638e9f5f8b').populate({ path : 'courses', options : { sort : { updatedAt : 1 }}}).exec();
// let course = await Course.findById('5df2748e06485c442dcd6bcf').populate('user').exec();
// let course = await  Course.findById('5df2748e06485c442dcd6bcf').populate({ path : 'episodes' , options : { sort : { updatedAt : 1}}}).exec();
// let episode = await Episode.findById('5e733e466b090e788b32d222').populate('course').exec();
// return res.json(user);
// return res.json(course);

module.exports = new homeController();