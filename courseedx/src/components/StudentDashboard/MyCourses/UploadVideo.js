import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
// import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import "./css/UploadVideo.css";
import * as api from "../../../api/index";
import { ProgressBar } from 'react-bootstrap';
import Swal from "sweetalert2";
import { ADD_VIDEO_TO_COURSE } from '../../../constants/actionTypes';


const initialState = {
    videoTitle: "",
    videoDescription: "",
}

function UploadVideo({ courseId }) {
    const [uploadVideoForm, setUploadVideoForm] = useState(initialState);
    const [videoThumbnail, setVideoThumbnail] = useState(null);
    const [videoFile, setVideoFile] = useState(null);
    const [progress, setProgress] = useState();
    const [error, setError] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (uploadVideoForm.videoTitle === "" || uploadVideoForm.videoDescription === "" || videoThumbnail === null || videoFile === null) {
            window.alert("Please fill all the fields");
        }
        else {
            const formData = new FormData();
            formData.append("courseId", courseId);
            formData.append("videoTitle", uploadVideoForm.videoTitle);
            formData.append("videoDescription", uploadVideoForm.videoDescription);
            formData.append("videoThumbnail", videoThumbnail);
            formData.append("videoFile", videoFile);

            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                },
                onUploadProgress: data => {
                    //Set the progress value to show the progress bar
                    setProgress(Math.round((100 * data.loaded) / data.total))
                },
            }

            try {
                const { data } = await api.addVideoToCourse(formData, config);
                dispatch({ type: ADD_VIDEO_TO_COURSE, payload: data });
                Swal.fire(
                    'Good job!',
                    'Video is uploaded Successfully',
                    'success'
                )
                setError(false);
                setProgress(null);
                setUploadVideoForm(initialState);
            } catch (error) {
                setError(true);
                Swal.fire(
                    'Failed!',
                    'Video is not uploaded please try again',
                    'error'
                )
                console.log(error);
            }
        }

    }


    const handleChange = (e) => {
        setUploadVideoForm({ ...uploadVideoForm, [e.target.name]: e.target.value });
    }

    const onSelectVideoThumbnail = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setVideoThumbnail(null)
            return
        }
        setVideoThumbnail(e.target.files[0])
    }

    const onSelectVideoFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setVideoFile(null)
            return
        }
        setVideoFile(e.target.files[0])
    }

    return (
        <div>
            <Typography className="" variant="h4">Start Course</Typography>
            <div className='upload__video__progress_div'>
                {!error && progress && <ProgressBar now={progress} label={`${progress}%`} />}
            </div>
            <form className="" onSubmit={(e) => handleSubmit(e)}>
                <div className='upload_video_form_group'>
                    <div>
                        <TextField
                            label="Video Title"
                            value={uploadVideoForm.videoTitle}
                            name="videoTitle"
                            onChange={handleChange}
                            size="small"
                            className="upload_video__input"
                        />
                    </div>
                    <div>
                        <TextField
                            label="Video Description"
                            value={uploadVideoForm.videoDescription}
                            name='videoDescription'
                            onChange={handleChange}
                            size="small"
                            className="upload_video__input"
                        />
                    </div>
                    <div>
                        <TextField
                            label="Video Thumbnail"
                            size="small"
                            type="file"
                            multiple={false}
                            onChange={(e) => onSelectVideoThumbnail(e)}
                            className="upload_video__input"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>
                    <div>
                        <TextField
                            label="Video File"
                            size="small"
                            type="file"
                            multiple={false}
                            onChange={(e) => onSelectVideoFile(e)}
                            className="upload_video__input"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>
                    <div>
                        <Button style={{ margin: "10px" }} variant="contained" color="primary" type="submit">
                            Upload Video
                        </Button>
                        <Button style={{ margin: "10px" }} variant="contained" color="primary" type="reset">
                            Reset
                        </Button>
                    </div>
                </div>
            </form>
        </div >
    )
}

export default UploadVideo;