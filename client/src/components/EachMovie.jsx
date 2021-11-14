import React from 'react';

var EachMovie = (props) => (
  <li className="each-movie">
    <h4 className="title">{props.movie.title}</h4>
    <button className="icon" onClick={(event) => props.handleClick(props.movie.title)}>{props.movie.watched === true? "watched" : "to watch"}</button>
    <img className="poster-img" src={"http://image.tmdb.org/t/p/w500" + props.movie.poster_path} alt="" width="108" height="164" />
    <p className="details1">Year: {props.movie.release_date}</p>
    <p className="details2">imdbRating: {props.movie.vote_average}</p>
    <p className="details3">Metascore: {props.movie.popularity}</p>
    <p className="synopsis">Synopsis: {props.movie.overview}</p>
  </li>
);


export default EachMovie;
