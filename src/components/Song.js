import React from 'react';

const Song = (props) => {
console.log("Song props:", props)
  return (
    <tr className="song">
      <td>{props.song.title}</td>
      <td>{props.song.singer}</td>
      <td><button onClick={() => props.handlePlay(props.song.id)}>Play</button></td>
    </tr>
  )
}

export default Song;
