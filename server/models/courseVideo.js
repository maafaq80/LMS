import mongoose from "mongoose";

function formattedDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = "0" + dd;
    }
    if (mm < 10) {
        mm = "0" + mm;
    }

    var date = `${yyyy}-${mm}-${dd}`;
    return date;
}


const courseVideoSchema = mongoose.Schema({
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    videoTitle: { type: String, required: true },
    videoDescription: { type: String, required: true },
    videoThumbnail: { type: String, required: true },
    videoFile: { type: String, required: true },
    videoAddedDate: { type: String, default: formattedDate() },
    createdAt: { type: Date, default: new Date() },
})

export default mongoose.model("CourseVideo", courseVideoSchema);