import React, { Component } from 'react';

class Filter extends Component {


  render() {
    console.log("Filter props:", this.props);
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input value={this.props.searchTerm} onChange={(event) => this.props.handleFilter(event)} id="title-filter" type="text"/>
      </div>
    );
  }
}

export default Filter;
