import multer from "multer";
import VideoModel from "../models/courseVideo.js";

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.fieldname === "videoThumbnail") {
            cb(null, './public/videoThumbnails/')
        }
        else if (file.fieldname === "videoFile") {
            cb(null, './public/videoFiles/');
        }
    },
    filename: function (req, file, cb) {
        if (file.fieldname === "videoThumbnail") {
            cb(null, Date.now() + "-" + file.originalname.toLowerCase())
        }
        else if (file.fieldname === "videoFile") {
            cb(null, Date.now() + "-" + file.originalname.toLowerCase())
        }
    }
})

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === "image/jpeg"
        || file.mimetype === "image/jpg"
        || file.mimetype === "image/png"
        || file.mimetype === "video/mp4"
        || file.mimetype === "video/avi"
        || file.mimetype === "video/mkv"
    ) {
        cb(null, true)
    }
    else {
        cb(null, false)
    }
}

export const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 1024 * 5
    },
    fileFilter: fileFilter
})



export const getVideosOfCourse = async (req, res) => {
    const { courseId } = req.params;

    try {
        const videos = await VideoModel.find({ "courseId": courseId });
        res.status(200).json(videos);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
}

export const addVideoToCourse = async (req, res) => {
    const videoData = req.body;
    const videoThumbnail = req.files.videoThumbnail[0].path;
    const videoFile = req.files.videoFile[0].path;
    const newVideo = new VideoModel({ ...videoData, videoThumbnail: videoThumbnail, videoFile: videoFile });
    try {
        await newVideo.save();
        res.status(200).json(newVideo);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}
