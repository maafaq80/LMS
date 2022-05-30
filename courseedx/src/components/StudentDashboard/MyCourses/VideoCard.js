import * as React from 'react';
import "./css/VideoCard.css";
import { URL } from '../../../constants/actionTypes';
import Button from 'react-bootstrap/Button'
import { Form } from 'react-bootstrap';


function VideoCard({ video, playVideo }) {

    const handleShowVideoChange = (e) => {
        console.log(e.target.checked);
    }

    return (
        <div className='VideoCard__component'>
            <div className='videoCard__videoThubmnail'>
                <img className='video_card__thumbnail' src={`${URL}${video.videoThumbnail}`} alt='Video Thumbnail' />
            </div>
            <div className='videoCard__text'>
                <h6>{video.videoTitle.slice(0, 30)}</h6>
                <p>{video.videoDescription.slice(0, 50)}</p>
            </div>
            <div className='videoCard__buttons'>
                <Button variant="primary" size="sm" onClick={() => playVideo(video)}>
                    Play Video &nbsp; &nbsp;
                </Button>
                <Button variant="primary" size="sm">
                    Delete Video
                </Button>
                <Form.Select size="sm" style={{ width: 100 }}>
                    <option>Visible</option>
                    <option>Hide</option>
                </Form.Select>
            </div>
        </div>
    )
}

export default VideoCard;