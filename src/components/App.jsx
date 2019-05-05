import MovieList from "./MovieList.js";
import exampleMovies from "../data/exampleMovie.js";
import SearchMovie from "./SearchMovie.js";
import AddMovie from "./AddMovie.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchContent: "",
      movies: exampleMovies,
      isDefault: true
    }
  }

  changeText(e) {
    e.preventDefault();
    this.setState({
      searchContent: e.target.value
    })
  }
  searchlist(e) {
    e.preventDefault();
    var text = this.state.searchContent.toLowerCase();
    if (text === "") {
      this.setState({
        movies: exampleMovies
      })
      return;
    }
    var movies = this.state.movies;
    var newMovieList = [];
    for (var i = 0; i < movies.length; i++) {
      if (movies[i]["title"].toLowerCase().indexOf(text) >= 0) {
        newMovieList.push(movies[i]);
      }
    }
    this.setState({
      movies: newMovieList
    })
  }

  resetMovie(newMovie) {
    //newMovies should be an object
    if (this.state.isDefault) {
      this.setState({
        movies: [newMovie],
        isDefault: false
      });
    } else {
      let curMovie = this.state.movies;
      // console.log('newMovie: ', newMovie, ' curMovie: ', curMovie);
      if (!curMovie.includes(newMovie)) {
        curMovie.push(newMovie);
        this.setState({
          movies: curMovie
        });
      }
    }
  }

  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <AddMovie reset={this.resetMovie.bind(this)} />
        <br />
        <SearchMovie textbar={this.changeText.bind(this)} search={this.searchlist.bind(this)} />
        <br />
        <div id="movielist">
            <MovieList movies={this.state.movies} />
        </div>
      </div>
    )
  }
}

export default App;