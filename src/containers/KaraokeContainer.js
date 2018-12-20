import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
// import songs from '../data/songs';

const endPoint = 'http://localhost:4000/users/1/songs'
class KaraokeContainer extends Component {

  // set initial state
  state = {
    songs: [],
    currentSong: '',
    searchTerm: ''
  }

  // fetch inside componentDidMount so data is there upon page load
  componentDidMount() {
    fetch(endPoint)
      .then(r => r.json())
      .then(songs => {
        this.setState({
          songs: songs
        })
      })
  }
  // ensured songs data came thru via react console

  handlePlay = (id) => {
    // console.log("i got this id", id);
    // use this id to find the currentSong and update state and send that song's details to KaraokeDisplay
    let clickedSong = this.state.songs.find((song) => {
      return song.id === id
    })
    // console.log(clickedSong);
    // update state w this song
    this.setState({
      currentSong: clickedSong
    })
  }

  handleFilter = (event) => {
    // console.log(event.target.value);
    // update state w this value
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    const filteredSongs = this.state.songs.filter((song) => {
      return song.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })

    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter handleFilter={this.handleFilter} searchTerm={this.state.searchTerm}/>
          <SongList songs={filteredSongs} handlePlay={this.handlePlay}/>
        </div>
        <KaraokeDisplay currentSong={this.state.currentSong}/>
      </div>
    );
  }
}

export default KaraokeContainer;
