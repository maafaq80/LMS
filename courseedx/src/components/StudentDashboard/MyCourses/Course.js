import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import "./css/Course.css";
import { Link } from 'react-router-dom';
import { URL } from '../../../constants/actionTypes';

function Course({ course }) {
    // console.log(course.courseThumbnail);
    return (
        <Card sx={{ maxWidth: 300, m: 2 }} className="Course__component">
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={`${URL}${course.courseThumbnail}`}
                    alt="green iguana"
                />
                <CardContent>
                    <h5>
                        {course.courseTitle}
                    </h5>
                    <p>
                        {course.courseSubTitle}
                    </p>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link to={`/dashboard/courseDetails/${course._id}`}>
                    <Button size="small" color="primary">
                        Open Course
                    </Button>
                </Link>
            </CardActions>
        </Card>
    )
}

export default Course;