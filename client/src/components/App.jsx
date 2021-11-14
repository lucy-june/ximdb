import React from 'react';
import Search from './Search.jsx';
import MovieList from './MovieList.jsx';
import AddMovie from './AddMovie.jsx';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
      error: null,
      isLoaded: false,
      searchValue: '',
      addValue: ''
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchBtn = this.handleSearchBtn.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleAddBtn = this.handleAddBtn.bind(this);
    this.handleWatchedBtn = this.handleWatchedBtn.bind(this);
    this.handleToWatchBtn = this.handleToWatchBtn.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.useFetch = this.useFetch.bind(this);
    this.dataResultsFilter = this.dataResultsFilter.bind(this);
  }



  handleSearch(searchValue) {
    this.setState({searchValue});
    console.log('SearchValue', searchValue);
    this.useFetch(searchValue, (data) => this.dataResultsFilter(data.results));
  }

  dataResultsFilter(dataResults) {
    console.log('searchvalue', dataResults);
    dataResults.forEach((movie) => movie['watched'] = false)
    var matchList = dataResults.filter((movie) => movie.title.toString().toLowerCase().includes(this.state.searchValue.toLowerCase()));
    if (matchList.length > 0) {
      this.setState({
        movieList: matchList,
        searchValue: ''
      })
    } else {
      this.setState({
        movieList: [{title: 'no movie by that name found'}],
        searchValue: ''
      })
    }
  }

  handleSearchBtn() {
    //this.setState({movieList: data});
    var matchList = this.state.movieList.filter((movie) => movie.title.toString().toLowerCase().includes(this.state.searchValue.toLowerCase()));
    if (matchList.length > 0) {
      this.setState({
        movieList: matchList,
        searchValue: ''
      })
    } else {
      this.setState({
        movieList: [{title: 'no movie by that name found'}],
        searchValue: ''
      })
    }
  }


  handleAdd(addValue) {
    //console.log(addValue)
    this.setState({addValue});
    console.log(addValue);
  }

  handleAddBtn() {
    if (this.state.addValue === "") {
      return;
    }
    var newMovie = {};
    newMovie['title'] = this.state.addValue;
    newMovie['watched'] = false;
    console.log(newMovie);
    //var newMovieList = this.state.movieList.concat(newMovie);
    this.setState({
      movieList: [...this.state.movieList, newMovie],
      addValue: ''
    })
  }

  handleWatchedBtn() {
    var watchedList = this.state.movieList.filter((movie) => movie.watched === true);
    this.setState({
      movieList: watchedList
    })
  }

  handleToWatchBtn() {
    var toWatchList = this.state.movieList.filter((movie) => movie.watched === false);
    this.setState({
      movieList: toWatchList
    })
  }

  handleClick(value) {
    console.log('click', value);
    var newMList = this.state.movieList.slice();
    console.log("newMList before", newMList);
    for (var i = 0; i < this.state.movieList.length; i++) {
      if (this.state.movieList[i].title === value) {
        var isWatched = this.state.movieList[i].watched;
        console.log("isWatched", isWatched);
        var newMovie = {};
        newMovie['title'] = value;
        newMovie['watched'] = !isWatched;
        console.log("newMovie", newMovie);
        newMList.splice(i, 1, newMovie);
        console.log("newMList", newMList);
      }
    };
    this.setState({
      movieList: newMList
    })
  }

  useFetch(query, callback) {
    return fetch('https://api.themoviedb.org/3/movie/popular?api_key=02c2953cb893d1a381491451cd553588')
      .then(res => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then(data => {
        callback(data);
      }),
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
  }


  render() {
    return (
      <div className="home">
        <nav className="navbar">X-IMDB</nav>
        <div className="container">
        <div className="footer">
          <button className="button3" onClick={this.handleWatchedBtn}>Watched</button>
          <button className="button4" onClick={this.handleToWatchBtn}>To Watch</button>
        </div>
        <div>
          <AddMovie handleAdd={this.handleAdd} handleAddBtn={this.handleAddBtn}/>
        </div>
        <div>
          <Search handleSearch={this.handleSearch} handleSearchBtn={this.handleSearchBtn}/>
        </div>
        <div className="movieList">
          <MovieList movieList={this.state.movieList} handleClick={this.handleClick}/>
        </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=02c2953cb893d1a381491451cd553588')
      .then(res => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then(data => {
        var newMovieList = data.results;
        newMovieList.forEach((movie) => movie['watched'] = false);
        console.log("componentDidMountMovieList:", newMovieList);
        this.setState({
          isLoaded: true,
          movieList: newMovieList
        })
      }),
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
  }





}

export default App;
