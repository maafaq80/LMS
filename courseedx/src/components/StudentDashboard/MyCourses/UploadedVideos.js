import React, { useState } from 'react'
import VideoCard from './VideoCard';
import "./css/UploadedVideos.css";
import { CircularProgress, Typography } from '@mui/material';
import PlayedVideo from './PlayedVideo';

function UploadedVideos({ courseVideos }) {
    const [playedVideo, setPlayedVideo] = useState(courseVideos[0]);

    const playVideo = (video) => {
        setPlayedVideo(video);
    }

    return (
        <div>
            <div>
                <Typography className="allemployees__title" variant="h6">Course Videos</Typography>
            </div>
            <div className='UploadedVideos_divide_content'>
                <div className='UploadedVideos__component'>
                    {!courseVideos ? (
                        <div className="" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <CircularProgress />
                        </div>
                    ) : (
                        <>
                            {courseVideos.map((video) => {
                                return (
                                    <VideoCard
                                        key={video._id}
                                        video={video}
                                        playVideo={playVideo}
                                    />
                                )
                            })}
                        </>
                    )}
                </div>
                <div className='UploadedVideos__video'>
                    {!courseVideos[0] || !playedVideo ? (
                        <div className="" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            {/* <CircularProgress /> */}
                            Your Played Video will apear here
                        </div>
                    ) : (
                        <>
                            <PlayedVideo video={playedVideo} />
                        </>
                    )}
                </div>
            </div>
        </div>
        // <div className='UploadedVideos__component'>
        //     <VideoCard />
        //     <VideoCard />
        //     <VideoCard />
        //     <VideoCard />
        //     <VideoCard />
        // </div>
    )
}

export default UploadedVideos;