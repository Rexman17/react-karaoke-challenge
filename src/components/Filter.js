import React, { Component } from 'react';

class Filter extends Component {
  render() {
    console.log("Filter props:", this.props);
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input id="title-filter" type="text" onChange={(event) => this.props.handleFilter(event)}/>
      </div>
    );
  }
}

export default Filter;
