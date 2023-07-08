// import React, { useRef } from 'react';

// const VideoPlayer = ({ videoSource }) => {
//   const videoRef = useRef(null);

//   const enterFullScreen = () => {
//     const videoElement = videoRef.current;

//     if (videoElement.requestFullscreen) {
//       videoElement.requestFullscreen();
//     } else if (videoElement.mozRequestFullScreen) { // Firefox
//       videoElement.mozRequestFullScreen();
//     } else if (videoElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
//       videoElement.webkitRequestFullscreen();
//     } else if (videoElement.msRequestFullscreen) { // IE/Edge
//       videoElement.msRequestFullscreen();
//     }
//   };

//   return (
//     <div>
//       <video ref={videoRef} controls>
//         <source src={"https://www.youtube.com/watch?v=KKukXWN8ym0"} type="video/mp4" />
//       </video>
//       <button onClick={enterFullScreen}>Enter Full Screen</button>
//     </div>
//   );
// };

// export default VideoPlayer;

// import React, { Component } from "react";
// import classes from './styles.css'
// class Video extends Component {
//   render() {
//     return (
//       <div className="comp">
//         <video src={"https://www.youtube.com/watch?v=9xjuIe4KM-4&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&index=23"} width="600" height="300" controls="controls" autoplay="true" />
//       </div>
//     );
//   }
// }

// export default Video;

import React from "react"
import ReactPlayer from "react-player"
import classes from './styles.css'

function App(props) {
  return (
    <div className="container">
        <div className = "comp">
        <ReactPlayer
            url="https://www.youtube.com/watch?v=ug50zmP9I7s"
        />
        </div>

        <div>
        <ul className="list-group mt-2">
            <li className="list-group-item">name</li>
            <li className="list-group-item">subject</li>
            <li className="list-group-item">wqegfbcgy</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
        </ul>
        </div>
    </div>
  )
}

export default App