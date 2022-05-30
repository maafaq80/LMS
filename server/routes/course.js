import express from 'express';
import { addCourse, getCourses, upload } from '../controllers/course.js';
import { addVideoToCourse, getVideosOfCourse, upload as videoUpload } from '../controllers/courseVideo.js';

const router = express.Router();

router.get("/", getCourses);
router.post("/addCourse", upload.single("courseThumbnail"), addCourse);

router.get("/getVideosOfCourse/:courseId", getVideosOfCourse);
router.post("/addVideoToCourse",
    videoUpload.fields([
        { name: 'videoThumbnail', maxCount: 1 },
        { name: 'videoFile', maxCount: 1 }
    ]
    ), addVideoToCourse);

export default router;