import React from 'react';

var Search = (props) => (
  <div className="inputField2">
    <input placeholder="Search..." onChange={event => props.handleSearch(event.target.value)} />
    <button className="button1" onClick={event => props.handleSearchBtn()}>
      <span>Go!</span>
    </button>
  </div>
);


export default Search;
