import MovieList from "./MovieList";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchContent: ""
    };
  }
  findMovie(e) {
    console.log('here');
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
      React.createElement("input", { type: "text" }),
      React.createElement(
        "button",
        { type: "button", onClick: this.findMovie.bind(this) },
        "GO"
      ),
      React.createElement(
        "div",
        { id: "movielist" },
        React.createElement(MovieList, { list: this.props.data })
      )
    );
  }
}

export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJzZWFyY2hDb250ZW50IiwiZmluZE1vdmllIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXIiLCJiaW5kIiwiZGF0YSJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsU0FBUCxNQUFzQixhQUF0QjtBQUNBLE1BQU1DLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWtDO0FBQ2hDQyxjQUFZQyxLQUFaLEVBQW1CO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMscUJBQWU7QUFESixLQUFiO0FBR0Q7QUFDSEMsWUFBVUMsQ0FBVixFQUFhO0FBQ1hDLFlBQVFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0M7O0FBRURDLFdBQVE7QUFDTixXQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FERjtBQUVJLHFDQUFPLE1BQUssTUFBWixHQUZKO0FBR0k7QUFBQTtBQUFBLFVBQVEsTUFBSyxRQUFiLEVBQXNCLFNBQVMsS0FBS0osU0FBTCxDQUFlSyxJQUFmLENBQW9CLElBQXBCLENBQS9CO0FBQUE7QUFBQSxPQUhKO0FBSUU7QUFBQTtBQUFBLFVBQUssSUFBRyxXQUFSO0FBQ0UsNEJBQUMsU0FBRCxJQUFXLE1BQU0sS0FBS1IsS0FBTCxDQUFXUyxJQUE1QjtBQURGO0FBSkYsS0FERjtBQVVEO0FBdEIrQjs7QUF5QmxDLGVBQWViLEdBQWYiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vdmllTGlzdCBmcm9tIFwiLi9Nb3ZpZUxpc3RcIjtcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWFyY2hDb250ZW50OiBcIlwiXG4gICAgfVxuICB9XG5maW5kTW92aWUoZSkge1xuICBjb25zb2xlLmxvZygnaGVyZScpO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5Nb3ZpZSBMaXN0PC9oMT5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIi8+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5maW5kTW92aWUuYmluZCh0aGlzKX0+R088L2J1dHRvbj5cbiAgICAgICAgPGRpdiBpZD1cIm1vdmllbGlzdFwiPlxuICAgICAgICAgIDxNb3ZpZUxpc3QgbGlzdD17dGhpcy5wcm9wcy5kYXRhfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXX0=