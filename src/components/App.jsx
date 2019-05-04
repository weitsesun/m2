import MovieList from "./MovieList";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchContent: ""
    }
  }
findMovie(e) {
  console.log('here');
  }

  render(){
    return (
      <div>
        <h1>Movie List</h1>
          <input type="text"/>
          <button type="button" onClick={this.findMovie.bind(this)}>GO</button>
        <div id="movielist">
          <MovieList list={this.props.data}/>
        </div>
      </div>
    )
  }
}

export default App;