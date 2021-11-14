import React from 'react';
import EachMovie from './EachMovie.jsx';

const MovieList = (props) => (
  <ul className="movie-list" >
    {props.movieList.map((movie, index) =>
      <EachMovie movie={movie} key={index} handleClick={props.handleClick}/>
    )}
  </ul>

);

export default MovieList;