import React from 'react';
import Song from './Song'

const SongList = (props) => {
console.log("SongList props:", props);

  const mappedSongs = props.songs.map((song) => {
    return <Song song={song} key={song.id} handlePlay={props.handlePlay}/>
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
