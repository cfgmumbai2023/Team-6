import React, { useRef } from 'react';

const VideoPlayer = ({ videoSource }) => {
  const videoRef = useRef(null);

  const enterFullScreen = () => {
    const videoElement = videoRef.current;

    if (videoElement.requestFullscreen) {
      videoElement.requestFullscreen();
    } else if (videoElement.mozRequestFullScreen) { // Firefox
      videoElement.mozRequestFullScreen();
    } else if (videoElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
      videoElement.webkitRequestFullscreen();
    } else if (videoElement.msRequestFullscreen) { // IE/Edge
      videoElement.msRequestFullscreen();
    }
  };

  return (
    <div>
      <video ref={videoRef} controls>
        <source src={"https://www.youtube.com/watch?v=KKukXWN8ym0"} type="video/mp4" />
      </video>
      <button onClick={enterFullScreen}>Enter Full Screen</button>
    </div>
  );
};

export default VideoPlayer;