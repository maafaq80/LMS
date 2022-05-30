import React, { useEffect, useRef } from 'react';
import { URL } from '../../../constants/actionTypes';

function PlayedVideo({ video }) {
    let videoExt = video.videoFile.slice(video.videoFile.length - 10, video.videoFile.length);
    var ext =  videoExt.split('.').pop();

    const videoRef = useRef();
    const previousUrl = useRef(video.videoFile);
  
    useEffect(() => {
      if (previousUrl.current === video.videoFile) {
        return;
      }
  
      if (videoRef.current) {
        videoRef.current.load();
      }
  
      previousUrl.current = video.videoFile;
    }, [video.videoFile]);
    
    return (
        <div>
            <video style={{maxWidth: "100%",height: "auto", border: "2px solid black"}} controls ref={videoRef}>
                <source src={`${URL}${video.videoFile}`} />
            </video>
        </div>
    )
}

export default PlayedVideo;