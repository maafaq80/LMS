import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Tabs from 'react-bootstrap/Tabs'
import { Tab } from 'react-bootstrap';
import "./css/CourseDetails.css";
import UploadedVideos from './UploadedVideos';
import UploadVideo from './UploadVideo';
import { useDispatch, useSelector } from 'react-redux';
import { getVideosOfCourse } from '../../../actions/course';

function CourseDetails() {
    let { courseId } = useParams();
    const [key, setKey] = useState('uploadedVideos');
    const dispatch = useDispatch();
    const courseVideos = useSelector((state) => state.courseVideos);


    useEffect(() => {
        dispatch(getVideosOfCourse(courseId));
    }, [dispatch,courseId]);


    return (
        <div className='CourseDetails__component'>
            <Tabs
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
                style={{background: "linear-gradient(179deg, #d2e957, transparent)", padding: "3px"}}
            >
                <Tab eventKey="uploadedVideos" title="Uploaded Videos">
                    <UploadedVideos courseVideos={courseVideos} />
                </Tab>
                <Tab eventKey="uploadNewVideo" title="Upload New Video">
                    <UploadVideo courseId={courseId}  />
                </Tab>
            </Tabs>
        </div>
    );
}

export default CourseDetails;