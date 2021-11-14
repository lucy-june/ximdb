import React from 'react';

var AddMovie = (props) => (
  <div className="inputField1">
    <input placeholder="Add new movies" onChange={event => props.handleAdd(event.target.value)} />
    <button className="button1" onClick={event => props.handleAddBtn()}>
      <span>Add</span>
    </button>
  </div>
);


export default AddMovie;
