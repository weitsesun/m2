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
    var text = this.state.searchContent;
    var movies = this.state.movies;
    var newMovieList = [];
    for (var i = 0; i < movies.length; i++) {
      console.log(movies[i]);
      if (movies[i]["title"].indexOf(text) >= 0) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwiZXhhbXBsZU1vdmllcyIsIlNlYXJjaE1vdmllIiwiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJzZWFyY2hDb250ZW50IiwibW92aWVzIiwiY2hhbmdlVGV4dCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJzZWFyY2hsaXN0IiwidGV4dCIsIm5ld01vdmllTGlzdCIsImkiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiaW5kZXhPZiIsInB1c2giLCJyZW5kZXIiLCJiaW5kIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxTQUFQLE1BQXNCLGdCQUF0QjtBQUNBLE9BQU9DLGFBQVAsTUFBMEIseUJBQTFCO0FBQ0EsT0FBT0MsV0FBUCxNQUF3QixrQkFBeEI7O0FBRUEsTUFBTUMsR0FBTixTQUFrQkMsTUFBTUMsU0FBeEIsQ0FBa0M7QUFDaENDLGNBQVlDLEtBQVosRUFBbUI7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxxQkFBZSxFQURKO0FBRVhDLGNBQVFUO0FBRkcsS0FBYjtBQUlEOztBQUVEVSxhQUFXQyxDQUFYLEVBQWM7QUFDWkEsTUFBRUMsY0FBRjtBQUNBLFNBQUtDLFFBQUwsQ0FBYztBQUNaTCxxQkFBZUcsRUFBRUcsTUFBRixDQUFTQztBQURaLEtBQWQ7QUFHRDtBQUNEQyxhQUFXTCxDQUFYLEVBQWM7QUFDWkEsTUFBRUMsY0FBRjtBQUNBLFFBQUlLLE9BQU8sS0FBS1YsS0FBTCxDQUFXQyxhQUF0QjtBQUNBLFFBQUlDLFNBQVMsS0FBS0YsS0FBTCxDQUFXRSxNQUF4QjtBQUNBLFFBQUlTLGVBQWUsRUFBbkI7QUFDQSxTQUFJLElBQUlDLElBQUksQ0FBWixFQUFlQSxJQUFJVixPQUFPVyxNQUExQixFQUFrQ0QsR0FBbEMsRUFBdUM7QUFDckNFLGNBQVFDLEdBQVIsQ0FBWWIsT0FBT1UsQ0FBUCxDQUFaO0FBQ0EsVUFBR1YsT0FBT1UsQ0FBUCxFQUFVLE9BQVYsRUFBbUJJLE9BQW5CLENBQTJCTixJQUEzQixLQUFvQyxDQUF2QyxFQUEwQztBQUN4Q0MscUJBQWFNLElBQWIsQ0FBa0JmLE9BQU9VLENBQVAsQ0FBbEI7QUFDRDtBQUNGO0FBQ0QsU0FBS04sUUFBTCxDQUFjO0FBQ1pKLGNBQVFTO0FBREksS0FBZDtBQUdEOztBQUVETyxXQUFRO0FBQ04sV0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREY7QUFFSSwwQkFBQyxXQUFELElBQWEsU0FBUyxLQUFLZixVQUFMLENBQWdCZ0IsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBdEIsRUFBa0QsUUFBUSxLQUFLVixVQUFMLENBQWdCVSxJQUFoQixDQUFxQixJQUFyQixDQUExRCxHQUZKO0FBR0U7QUFBQTtBQUFBLFVBQUssSUFBRyxXQUFSO0FBQ0UsNEJBQUMsU0FBRCxJQUFXLFFBQVEsS0FBS25CLEtBQUwsQ0FBV0UsTUFBOUI7QUFERjtBQUhGLEtBREY7QUFTRDtBQXpDK0I7O0FBNENsQyxlQUFlUCxHQUFmIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3ZpZUxpc3QgZnJvbSBcIi4vTW92aWVMaXN0LmpzXCI7XG5pbXBvcnQgZXhhbXBsZU1vdmllcyBmcm9tIFwiLi4vZGF0YS9leGFtcGxlTW92aWUuanNcIjtcbmltcG9ydCBTZWFyY2hNb3ZpZSBmcm9tIFwiLi9TZWFyY2hNb3ZpZS5qc1wiO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VhcmNoQ29udGVudDogXCJcIixcbiAgICAgIG1vdmllczogZXhhbXBsZU1vdmllc1xuICAgIH1cbiAgfVxuICBcbiAgY2hhbmdlVGV4dChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VhcmNoQ29udGVudDogZS50YXJnZXQudmFsdWVcbiAgICB9KSBcbiAgfVxuICBzZWFyY2hsaXN0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIHRleHQgPSB0aGlzLnN0YXRlLnNlYXJjaENvbnRlbnQ7XG4gICAgdmFyIG1vdmllcyA9IHRoaXMuc3RhdGUubW92aWVzO1xuICAgIHZhciBuZXdNb3ZpZUxpc3QgPSBbXTtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgbW92aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zb2xlLmxvZyhtb3ZpZXNbaV0pO1xuICAgICAgaWYobW92aWVzW2ldW1widGl0bGVcIl0uaW5kZXhPZih0ZXh0KSA+PSAwKSB7XG4gICAgICAgIG5ld01vdmllTGlzdC5wdXNoKG1vdmllc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbW92aWVzOiBuZXdNb3ZpZUxpc3RcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5Nb3ZpZSBMaXN0PC9oMT5cbiAgICAgICAgICA8U2VhcmNoTW92aWUgdGV4dGJhcj17dGhpcy5jaGFuZ2VUZXh0LmJpbmQodGhpcyl9IHNlYXJjaD17dGhpcy5zZWFyY2hsaXN0LmJpbmQodGhpcyl9Lz5cbiAgICAgICAgPGRpdiBpZD1cIm1vdmllbGlzdFwiPlxuICAgICAgICAgIDxNb3ZpZUxpc3QgbW92aWVzPXt0aGlzLnN0YXRlLm1vdmllc30vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il19