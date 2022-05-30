import multer from "multer";
import CourseModel from "../models/course.js";


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/coursesThumbnails/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now()+ "-" +file.originalname.toLowerCase())
    }
})

const fileFilter = (req,file,cb)=> {
    if(file.mimetype === "image/jpeg" || file.mimetype === "image/jpg" || file.mimetype === "image/png"){
        cb(null,true)
    }
    else{
        cb(null,false)
    }
}

export const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 10
    },
    fileFilter: fileFilter
})




export const getCourses = async (req, res) => {
    try {
        const courses = await CourseModel.find();
        res.status(200).json(courses);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
}




export const addCourse = async (req,res) =>{
    const courseData = req.body;
    const newCourse = new CourseModel({...courseData,courseThumbnail: req.file.path});

    try {
        await newCourse.save();
        res.status(200).json(newCourse);

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}
