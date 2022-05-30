import { TextField, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import "./css/StartCourse.css";
import Form from 'react-bootstrap/Form'
import { addCourse } from '../../../actions/course';
import { useDispatch } from "react-redux";

const initialState = {
    courseTitle: "",
    courseSubTitle: "",
    courseCategory: "",
    whatWillStudentLearn: "",
    whatArePrerequisites: "",
    whoIsThisCourseFor: "",
    courseLevel: "",
    coursePricing: "",
    courseLanguage: "",
    welcomeMessage: "",
    congratsMessage: "",
}


function StartCourse() {
    const [startCourseForm, setStartCourseForm] = useState(initialState);
    const [courseThumbnail, setCourseThumbnail] = useState(null);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (startCourseForm.courseTitle === "" || startCourseForm.courseSubTitle === "" || startCourseForm.courseCategory === "" || courseThumbnail === null) {
            window.alert("Please fill all the fields");
        }
        else {
            const formData = new FormData();
            formData.append("courseTitle", startCourseForm.courseTitle);
            formData.append("courseSubTitle", startCourseForm.courseSubTitle);
            formData.append("courseCategory", startCourseForm.courseCategory);
            formData.append("whatWillStudentLearn", startCourseForm.whatWillStudentLearn);
            formData.append("whatArePrerequisites", startCourseForm.whatArePrerequisites);
            formData.append("whoIsThisCourseFor", startCourseForm.whoIsThisCourseFor);
            formData.append("courseLevel", startCourseForm.courseLevel);
            formData.append("coursePricing", startCourseForm.coursePricing);
            formData.append("courseLanguage", startCourseForm.courseLanguage);
            formData.append("welcomeMessage", startCourseForm.welcomeMessage);
            formData.append("congratsMessage", startCourseForm.congratsMessage);
            formData.append("courseThumbnail", courseThumbnail);

            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }

            dispatch(addCourse(formData, config));

            setStartCourseForm(initialState);
            // setCourseThumbnail(null);

        }
    }

    const handleChange = (e) => {
        setStartCourseForm({ ...startCourseForm, [e.target.name]: e.target.value });
    }



    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setCourseThumbnail(null)
            return
        }
        setCourseThumbnail(e.target.files[0])
    }


    return (
        <div className="start__course_component">
            <div className="">
                <form className="" onSubmit={handleSubmit}>
                    <Typography className="" variant="h4">Start Course</Typography>
                    <Typography className="start__course__headings" variant="h6">Provide basic information about your course, course Title , SubTitle and Category</Typography>
                    <div className='start__course_form_group'>
                        <div>
                            <TextField
                                label="Course Title"
                                value={startCourseForm.courseTitle}
                                name="courseTitle"
                                onChange={handleChange}
                                size="small"
                                className="start__course__input"
                            />
                        </div>
                        <div>
                            <TextField
                                label="Course Subtitle"
                                value={startCourseForm.courseSubTitle}
                                name='courseSubTitle'
                                onChange={handleChange}
                                size="small"
                                className="start__course__input"
                            />
                        </div>
                        <div>
                            <Form.Select
                                name='courseCategory'
                                value={startCourseForm.courseCategory}
                                onChange={handleChange}
                                className="start__course__select"
                            >
                                <option value="">-- Select Course Category --</option>
                                <option value="288">Development</option>
                                <option value="268">Business</option>
                                <option value="328">Finance &amp; Accounting</option>
                                <option value="294">IT &amp; Software</option>
                                <option value="292">Office Productivity</option>
                                <option value="296">Personal Development</option>
                                <option value="269">Design</option>
                                <option value="290">Marketing</option>
                                <option value="274">Lifestyle</option>
                                <option value="273">Photography &amp; Video</option>
                                <option value="276">Health &amp; Fitness</option>
                                <option value="278">Music</option>
                                <option value="300">Teaching &amp; Academics</option>
                            </Form.Select>
                        </div>
                    </div>

                    <Typography className="start__course__headings" variant="h6">Provide the Prerequisites of the course, how will your course improve the student and who can be benefited from it</Typography>
                    <div className='start__course_form_group'>
                        <div>
                            <TextField
                                label="What will student learn"
                                value={startCourseForm.whatWillStudentLearn}
                                name="whatWillStudentLearn"
                                onChange={handleChange}
                                size="small"
                                className="start__course__input"
                            />
                        </div>
                        <div>
                            <TextField
                                label="What are Prerequisites"
                                value={startCourseForm.whatArePrerequisites}
                                name="whatArePrerequisites"
                                onChange={handleChange}
                                size="small"
                                className="start__course__input"
                            />
                        </div>
                        <div>
                            <TextField
                                label="Who is this course for"
                                value={startCourseForm.whoIsThisCourseFor}
                                name="whoIsThisCourseFor"
                                onChange={handleChange}
                                size="small"
                                className="start__course__input"
                            />
                        </div>
                    </div>

                    <Typography className="start__course__headings" variant="h6">Provide some basic info about the course level, pricing, what language is this course in and also provide the Welcome mesage for student when he or she starts the course and as well as provide the Congratulation message for student after successfully completing the course. In addition add the beautiful Thumbnail of the course</Typography>
                    <div className='start__course_form_group'>
                        <div>
                            <Form.Select
                                value={startCourseForm.courseLevel}
                                onChange={handleChange}
                                name="courseLevel"
                                className="start__course__select"
                            >
                                <option value={''}>Course Level</option>
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advance">Advance</option>
                            </Form.Select>
                        </div>
                        <div>
                            <TextField
                                label="Course Pricing"
                                value={startCourseForm.coursePricing}
                                name="coursePricing"
                                type={"number"}
                                onChange={handleChange}
                                size="small"
                                className="start__course__input"
                            />
                        </div>
                        <div>
                            <TextField
                                label="Course Language"
                                value={startCourseForm.courseLanguage}
                                name="courseLanguage"
                                onChange={handleChange}
                                size="small"
                                className="start__course__input"
                            />
                        </div>
                    </div>

                    <div className='start__course_form_group'>
                        <div>
                            <TextField
                                label="Welcome Message for course"
                                value={startCourseForm.welcomeMessage}
                                name="welcomeMessage"
                                onChange={handleChange}
                                size="small"
                                className="start__course__input"
                            />
                        </div>
                        <div>
                            <TextField
                                label="Congrats Message after completion"
                                value={startCourseForm.congratsMessage}
                                name="congratsMessage"
                                onChange={handleChange}
                                size="small"
                                className="start__course__input"
                            />
                        </div>
                        <div>
                            <TextField
                                label="Course Thumbnail"
                                size="small"
                                type="file"
                                multiple={false}
                                onChange={(e) => onSelectFile(e)}
                                className="start__course__input"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                    </div>

                    <div>
                        <Button style={{ marginTop: "10px" }} variant="contained" color="primary" type="submit">
                            Start Course
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default StartCourse;



{/* <div className='start__course_form_group'>
    <div>
        <TextField
            label="Course Title"
            value={startCourseForm.courseTitle}
            name="courseTitle"
            onChange={handleChange}
            size="small"
            className="start__course__input"
        />
    </div>
    <div>
        <TextField
            label="Course Subtitle"
            value={startCourseForm.courseSubTitle}
            name='courseSubTitle'
            onChange={handleChange}
            size="small"
            className="start__course__input"
        />
    </div>
    <div>
        <Form.Select
            name='courseCategory'
            value={startCourseForm.courseCategory}
            onChange={handleChange}
            className="start__course__select"
        >
            <option value={''}>Course Category</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </Form.Select>
    </div>
    <div>
        <TextField
            label="What will student learn"
            value={startCourseForm.whatWillStudentLearn}
            name="whatWillStudentLearn"
            onChange={handleChange}
            size="small"
            className="start__course__input"
        />
    </div>
    <div>
        <TextField
            label="What are Prerequisites"
            value={startCourseForm.whatArePrerequisites}
            name="whatArePrerequisites"
            onChange={handleChange}
            size="small"
            className="start__course__input"
        />
    </div>
    <div>
        <TextField
            label="Who is this course for"
            value={startCourseForm.whoIsThisCourseFor}
            name="whoIsThisCourseFor"
            onChange={handleChange}
            size="small"
            className="start__course__input"
        />
    </div>
    <div>
        <Form.Select
            value={startCourseForm.courseLevel}
            onChange={handleChange}
            name="courseLevel"
            className="start__course__select"
        >
            <option value={''}>Course Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advance">Advance</option>
        </Form.Select>
    </div>
    <div>
        <TextField
            label="Course Pricing"
            value={startCourseForm.coursePricing}
            name="coursePricing"
            onChange={handleChange}
            size="small"
            className="start__course__input"
        />
    </div>
    <div>
        <TextField
            label="Course Language"
            value={startCourseForm.courseLanguage}
            name="courseLanguage"
            onChange={handleChange}
            size="small"
            className="start__course__input"
        />
    </div>
    <div>
        <TextField
            label="Welcome Message for course"
            value={startCourseForm.welcomeMessage}
            name="welcomeMessage"
            onChange={handleChange}
            size="small"
            className="start__course__input"
        />
    </div>
    <div>
        <TextField
            label="Congrats Message after completion"
            value={startCourseForm.congratsMessage}
            name="congratsMessage"
            onChange={handleChange}
            size="small"
            className="start__course__input"
        />
    </div>
    <div>
        <TextField
            label="Course Thumbnail"
            size="small"
            type="file"
            multiple={false}
            onChange={(e) => onSelectFile(e)}
            className="start__course__input"
            InputLabelProps={{
                shrink: true,
            }}
        />
    </div>
</div> */}