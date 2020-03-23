const multer = require('multer');
const mkdirp = require('mkdirp');
const fs = require('fs');


const getDirImage = () =>{
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let day = new Date().getDay();
    return  `./public/uploads/images/${year}/${month}/${day}`;
}

const ImageStorage = multer.diskStorage({
    destination : (req , file , cb) => {
        // console.log(file);
        let dir = getDirImage();
        // cb(null , dir);
        mkdirp(dir , (err) => cb(null , dir))
    },
    filename : (req , file , cb) => {
        // console.log(file);
        let filePath = getDirImage() + '/' + file.originalname;
        if(!fs.existsSync(filePath))
            cb(null , file.originalname);
        else
            cb(null , Date.now() + '-' + file.originalname);
    }
})

const uploadImage = multer({
    storage : ImageStorage,
    limits : {
        fileSize : 1024 *1024 * 10
    }
});


module.exports = uploadImage;
