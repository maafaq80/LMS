import React from 'react'
import Course from './Course';
import { useSelector } from 'react-redux';
import "./css/MyCourses.css";
import { CircularProgress, Typography } from '@mui/material';

function MyCourses() {
    const courses = useSelector((state) => state.courses);
    return (
        <div>
            <div>
                <Typography className="allemployees__title" variant="h6">Your Courses</Typography>
            </div>
            <div className='MyCourses__component'>
                {!courses ? (
                    <div className="" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <CircularProgress />
                    </div>
                ) : (
                    <>
                        {courses.map((course) => {
                            return (
                                <Course
                                    key={course._id}
                                    course={course}
                                />
                            )
                        })}
                    </>
                )}
            </div>
        </div>
    )
}

export default MyCourses;