import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Filter from '../components/Filter';
import SongList from '../components/SongList';

class Sidebar extends Component {
  state = {
    showSongs: true,
    title: "",
  }

  toggleSongQueue = () => {
    this.setState(prevState => {
      return { showSongs: !prevState.showSongs };
    })
  }

  updateTitle = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  filteredSongs = () => {
    return this.props.songs.filter(song => song.title.toLowerCase().includes(this.state.title.toLowerCase()));
  }

  render() {
    const { songs, playSong, queue } = this.props;

    return (
      <div className="sidebar">
        <NavBar showSongs={this.toggleSongQueue} showQueue={this.toggleSongQueue} />
        {
          this.state.showSongs ?
            <React.Fragment>
              <Filter title={this.state.title} handleChange={this.updateTitle} />
              <SongList songs={this.filteredSongs()} playSong={playSong} />
            </React.Fragment>
          :
            <SongList songs={queue} />
        }
      </div>
    )
  }
}

export default Sidebar;
