const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const passwordResset = mongoose.Schema({
    email : { type : String , require : true },
    token : { type : String , require : true},
    use : { type : Boolean , default : false }
} , { timestamps : {updatedAt: false } });


module.exports = mongoose.model('passwordReset' , passwordResset);