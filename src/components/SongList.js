import React from 'react';
import Song from './Song'

const SongList = (props) => {
  console.log("SongList props:", props);

  // map over the songs to render each one
  const mappedSongs = props.songs.map((songObj) => {
    return <Song song={songObj} key={songObj.id} handlePlay={props.handlePlay}/>
  })

  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>▶</th>
        </tr>

        {mappedSongs}

      </tbody>
    </table>
  )
}

export default SongList;
