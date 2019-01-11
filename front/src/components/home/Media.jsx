import React from 'react';
import YouTube from 'react-youtube';
import './Media.scss';

const Media = () => {
  const opts = {
    playerVars: {
      autoplay: 0,
      rel: 0,
      showinfo: 0,
      modestbranding: 1,
    },
  };
  return (
    <div className="Media">
      <YouTube
        className="video-media"
        videoId="RluXbJ4CZHU"
        opts={opts}
      />
    </div>
  );
};

export default Media;
