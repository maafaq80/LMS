import React, { useEffect } from 'react';
import SideBar from "../SideBar/Sidebar";
import { Routes, Route } from "react-router-dom";
import "./StudentHome.css";
import MyCourses from "../MyCourses/MyCourses";
import StartCourse from "../MyCourses/StartCourse.js";
import CourseDetails from "../MyCourses/CourseDetails.js";
import { useDispatch } from 'react-redux';
import { fetchCourses } from '../../../actions/course';

const Courses = () => {
    return (
        <h1>Courses</h1>
    )
}
const Team = () => {
    return (
        <h1>Team</h1>
    )
}

const StudentDashboard = () => {
    return (
        <h1>StudentDashboard</h1>
    )
}

function StudentHome() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCourses());
    }, [dispatch]);

    return (
        <div>
            <SideBar />
            <div className='student_home_content'>
                <Routes>
                    <Route path="/" exact element={<StudentDashboard />} />
                    <Route path='/myCourses' exact element={<MyCourses />} />
                    <Route path='/startCourse' exact element={<StartCourse />} />
                    <Route path='/myCourses' exact element={<MyCourses />} />
                    <Route path='/courseDetails/:courseId' exact element={<CourseDetails />} />
                </Routes>
            </div>
        </div>
    )
}

export default StudentHome;
