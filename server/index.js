    import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import courseRoutes from "./routes/course.js";

const app = express(); 
app.use(cors());
app.use(bodyParser.json({ limit: '4000mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '4000mb', extended: true }));

//Express Error Handling
app.use(function (err, req, res, next) {
    // Check if the error is thrown from multer
    if (err instanceof multer.MulterError) {
        res.statusCode = 400
        res.send({ code: err.code })
    } else if (err) {   
        // If it is not multer error then check if it is our custom error for FILE_MISSING
        if (err.message === "FILE_MISSING") {
            res.statusCode = 400
            res.send({ code: "FILE_MISSING" })
        } else {
            //For any other errors set code as GENERIC_ERROR
            res.statusCode = 500
            res.send({ code: "GENERIC_ERROR" })
        }
    }
})

app.use("/public", express.static("public"));
app.use("/course", courseRoutes);

const CONNECTION_URL = "mongodb://localhost:27017/courseedx";
app.use('/', (req, res) => {
    res.send("Welcome to CourseEdx api");
})


const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server running on port ${PORT}`)))
    .catch((error) => console.log(error));