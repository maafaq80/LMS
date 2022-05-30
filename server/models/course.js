import mongoose from "mongoose";

function formattedDate(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();

    if(dd<10){
        dd = "0"+dd;
    }
    if(mm<10){
        mm = "0"+mm;
    }

    var date = `${yyyy}-${mm}-${dd}`;
    return date;
}


const courseSchema = mongoose.Schema({
    courseTitle: {type:String,required:true},
    courseSubTitle: {type:String,required:true},
    courseCategory: {type: String,required:true},
    whatWillStudentLearn: {type:String,required:true},
    whatArePrerequisites: {type:String,required:true},
    whoIsThisCourseFor: {type:String,required:true},
    courseLevel: {type:String,required:true},
    coursePricing: {type:Number,required:true},
    courseLanguage: {type:String,required:true},
    welcomeMessage: {type:String,required:true},
    congratsMessage: {type:String,required:true},
    courseThumbnail:  {type:String,required:true},
    courseAddedDate: {type:String,default: formattedDate()},
    createdAt: {type: Date, default: new Date()},
})

export default mongoose.model("Course",courseSchema);