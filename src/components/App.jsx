import MovieList from "./MovieList.js";
import exampleMovies from "../data/exampleMovie.js";
import SearchMovie from "./SearchMovie.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchContent: "",
      movies: exampleMovies
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
    var text = this.state.searchContent;
    var movies = this.state.movies;
    var newMovieList = [];
    for(var i = 0; i < movies.length; i++) {
      console.log(movies[i]);
      if(movies[i]["title"].indexOf(text) >= 0) {
        newMovieList.push(movies[i]);
      }
    }
    this.setState({
      movies: newMovieList
    })
  }

  render(){
    return (
      <div>
        <h1>Movie List</h1>
          <SearchMovie textbar={this.changeText.bind(this)} search={this.searchlist.bind(this)}/>
        <div id="movielist">
          <MovieList movies={this.state.movies}/>
        </div>
      </div>
    )
  }
}

export default App;