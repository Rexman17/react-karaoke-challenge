import React from 'react';
import Lyrics from './Lyrics';

const KaraokeDisplay = (props) => {
  // console.log("KaraokeDisplay props:", props);
  return (
    <div className="karaoke-display">
      <h2>{props.songPlaying.title}</h2>
      <Lyrics lyrics={props.songPlaying.lyrics} />
    </div>
  )
}

export default KaraokeDisplay;
