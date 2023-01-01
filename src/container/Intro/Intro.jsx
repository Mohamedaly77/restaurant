import React, { useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';

import './Intro.css';

const Intro = () => {
  const vidref = React.useRef();
  const [playVideo, setplayVideo] = useState('');

  const handleVideo = () => {
    setplayVideo((previousVideo) => !previousVideo);
    if (playVideo) {
      vidref.current.pause();
    } else {
      vidref.current.play();
    }
  };
  return (
    <div className="app__video">
      <video
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
        ref={vidref}
      />

      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize="30px" />
          ) : (
            <BsFillPlayFill color="#fff" fontSize="30px" />
          )}
        </div>
      </div>
    </div>
  );
};
export default Intro;
