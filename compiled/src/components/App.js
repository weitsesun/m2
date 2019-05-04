import MovieList from "./MovieList.js";
import exampleMovies from "../data/exampleMovie.js";
import SearchMovie from "./SearchMovie.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchContent: "",
      movies: exampleMovies
    };
  }

  changeText(e) {
    e.preventDefault();
    this.setState({
      searchContent: e.target.value
    });
  }
  searchlist(e) {
    e.preventDefault();
    var text = this.state.searchContent.toLowerCase();
    if (text === "") {
      this.setState({
        movies: exampleMovies
      });
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
    });
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        "Movie List"
      ),
      React.createElement(SearchMovie, { textbar: this.changeText.bind(this), search: this.searchlist.bind(this) }),
      React.createElement(
        "div",
        { id: "movielist" },
        React.createElement(MovieList, { movies: this.state.movies })
      )
    );
  }
}

export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwiZXhhbXBsZU1vdmllcyIsIlNlYXJjaE1vdmllIiwiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJzZWFyY2hDb250ZW50IiwibW92aWVzIiwiY2hhbmdlVGV4dCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJzZWFyY2hsaXN0IiwidGV4dCIsInRvTG93ZXJDYXNlIiwibmV3TW92aWVMaXN0IiwiaSIsImxlbmd0aCIsImluZGV4T2YiLCJwdXNoIiwicmVuZGVyIiwiYmluZCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsU0FBUCxNQUFzQixnQkFBdEI7QUFDQSxPQUFPQyxhQUFQLE1BQTBCLHlCQUExQjtBQUNBLE9BQU9DLFdBQVAsTUFBd0Isa0JBQXhCOztBQUVBLE1BQU1DLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWtDO0FBQ2hDQyxjQUFZQyxLQUFaLEVBQW1CO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMscUJBQWUsRUFESjtBQUVYQyxjQUFRVDtBQUZHLEtBQWI7QUFJRDs7QUFFRFUsYUFBV0MsQ0FBWCxFQUFjO0FBQ1pBLE1BQUVDLGNBQUY7QUFDQSxTQUFLQyxRQUFMLENBQWM7QUFDWkwscUJBQWVHLEVBQUVHLE1BQUYsQ0FBU0M7QUFEWixLQUFkO0FBR0Q7QUFDREMsYUFBV0wsQ0FBWCxFQUFjO0FBQ1pBLE1BQUVDLGNBQUY7QUFDQSxRQUFJSyxPQUFPLEtBQUtWLEtBQUwsQ0FBV0MsYUFBWCxDQUF5QlUsV0FBekIsRUFBWDtBQUNBLFFBQUdELFNBQVMsRUFBWixFQUFnQjtBQUNkLFdBQUtKLFFBQUwsQ0FBYztBQUNaSixnQkFBUVQ7QUFESSxPQUFkO0FBR0E7QUFDRDtBQUNELFFBQUlTLFNBQVMsS0FBS0YsS0FBTCxDQUFXRSxNQUF4QjtBQUNBLFFBQUlVLGVBQWUsRUFBbkI7QUFDQSxTQUFJLElBQUlDLElBQUksQ0FBWixFQUFlQSxJQUFJWCxPQUFPWSxNQUExQixFQUFrQ0QsR0FBbEMsRUFBdUM7QUFDckMsVUFBR1gsT0FBT1csQ0FBUCxFQUFVLE9BQVYsRUFBbUJGLFdBQW5CLEdBQWlDSSxPQUFqQyxDQUF5Q0wsSUFBekMsS0FBa0QsQ0FBckQsRUFBd0Q7QUFDdERFLHFCQUFhSSxJQUFiLENBQWtCZCxPQUFPVyxDQUFQLENBQWxCO0FBQ0Q7QUFDRjtBQUNELFNBQUtQLFFBQUwsQ0FBYztBQUNaSixjQUFRVTtBQURJLEtBQWQ7QUFHRDs7QUFFREssV0FBUTtBQUNOLFdBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURGO0FBRUksMEJBQUMsV0FBRCxJQUFhLFNBQVMsS0FBS2QsVUFBTCxDQUFnQmUsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBdEIsRUFBa0QsUUFBUSxLQUFLVCxVQUFMLENBQWdCUyxJQUFoQixDQUFxQixJQUFyQixDQUExRCxHQUZKO0FBR0U7QUFBQTtBQUFBLFVBQUssSUFBRyxXQUFSO0FBQ0UsNEJBQUMsU0FBRCxJQUFXLFFBQVEsS0FBS2xCLEtBQUwsQ0FBV0UsTUFBOUI7QUFERjtBQUhGLEtBREY7QUFTRDtBQTlDK0I7O0FBaURsQyxlQUFlUCxHQUFmIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3ZpZUxpc3QgZnJvbSBcIi4vTW92aWVMaXN0LmpzXCI7XG5pbXBvcnQgZXhhbXBsZU1vdmllcyBmcm9tIFwiLi4vZGF0YS9leGFtcGxlTW92aWUuanNcIjtcbmltcG9ydCBTZWFyY2hNb3ZpZSBmcm9tIFwiLi9TZWFyY2hNb3ZpZS5qc1wiO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VhcmNoQ29udGVudDogXCJcIixcbiAgICAgIG1vdmllczogZXhhbXBsZU1vdmllc1xuICAgIH1cbiAgfVxuICBcbiAgY2hhbmdlVGV4dChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VhcmNoQ29udGVudDogZS50YXJnZXQudmFsdWVcbiAgICB9KSBcbiAgfVxuICBzZWFyY2hsaXN0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIHRleHQgPSB0aGlzLnN0YXRlLnNlYXJjaENvbnRlbnQudG9Mb3dlckNhc2UoKTtcbiAgICBpZih0ZXh0ID09PSBcIlwiKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbW92aWVzOiBleGFtcGxlTW92aWVzXG4gICAgICB9KVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgbW92aWVzID0gdGhpcy5zdGF0ZS5tb3ZpZXM7XG4gICAgdmFyIG5ld01vdmllTGlzdCA9IFtdO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBtb3ZpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmKG1vdmllc1tpXVtcInRpdGxlXCJdLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0ZXh0KSA+PSAwKSB7XG4gICAgICAgIG5ld01vdmllTGlzdC5wdXNoKG1vdmllc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbW92aWVzOiBuZXdNb3ZpZUxpc3RcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5Nb3ZpZSBMaXN0PC9oMT5cbiAgICAgICAgICA8U2VhcmNoTW92aWUgdGV4dGJhcj17dGhpcy5jaGFuZ2VUZXh0LmJpbmQodGhpcyl9IHNlYXJjaD17dGhpcy5zZWFyY2hsaXN0LmJpbmQodGhpcyl9Lz5cbiAgICAgICAgPGRpdiBpZD1cIm1vdmllbGlzdFwiPlxuICAgICAgICAgIDxNb3ZpZUxpc3QgbW92aWVzPXt0aGlzLnN0YXRlLm1vdmllc30vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il19