import React from 'react';
import YouTube from 'react-youtube';

const Media = () => {
  const opts = {
    height: '350',
    width: '100%',
    playerVars: { // différente configuration de lecture, d'affichage, d'utilisation//
      autoplay: 0,
      start: 120,
      end: 300,
      controls: 0,
      rel: 0,
      showinfo: 0,
      modestbranding: 1,
    },

  };

  return (
    <YouTube
      videoId="RluXbJ4CZHU" // Lien id de la video, pour inserer une video, tu as le choix soit avec replace ou slice//
      opts={opts}
    />
  );
};

export default Media;
