import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
// import songs from '../data/songs';

const songsEndPoint = 'http://localhost:4000/songs'
class KaraokeContainer extends Component {
  state = {
    songs: [],
    songPlaying: '',
    filterTerm: ''
  }

  componentDidMount() {
    fetch(songsEndPoint)
      .then(r => r.json())
      .then(arrayofSongObjs => {
        // Update state
        this.setState({
          songs: arrayofSongObjs
        }, () => console.log("state is now:", this.state))
      })
  }

  handlePlay = (id) => {
    console.log("triggered handlePlay");
    // find the song that was clicked based on it's id sent back in the callback
    let foundSong = this.state.songs.find((song) => song.id === id)
    // debugger
    this.setState({
      songPlaying: foundSong
    }, () => console.log("Song playing is now:", this.state.songPlaying))
  }

  // sent the event from Filter.js, now we want the event.target.value to get the filter term
  handleFilter = (event) => {
    // console.log(event.target.value);
    this.setState({ filterTerm: event.target.value })
  }

  render() {
    const filteredSongs = this.state.songs.filter((song) => {
      return song.title.toLowerCase().includes(this.state.filterTerm.toLowerCase())
    })
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter handleFilter={this.handleFilter} />
          <SongList songs={filteredSongs} handlePlay={this.handlePlay}/>
        </div>
        <KaraokeDisplay songPlaying={this.state.songPlaying}/>
      </div>
    );
  }
}

export default KaraokeContainer;
