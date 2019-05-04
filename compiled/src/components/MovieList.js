
class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }

  //input props: movies=[{title:"something"}]
  render() {
    return React.createElement(
      'div',
      null,
      this.props.movies.map((movie, index) => {
        return React.createElement(
          'div',
          { key: 'mv_' + index },
          movie.title
        );
      })
    );
  }
}

export default MovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicmVuZGVyIiwibW92aWVzIiwibWFwIiwibW92aWUiLCJpbmRleCIsInRpdGxlIl0sIm1hcHBpbmdzIjoiO0FBQ0EsTUFBTUEsU0FBTixTQUF3QkMsTUFBTUMsU0FBOUIsQ0FBdUM7QUFDckNDLGNBQVlDLEtBQVosRUFBbUI7QUFDakIsVUFBTUEsS0FBTjtBQUNEOztBQUVDO0FBQ0ZDLFdBQVM7QUFDUCxXQUNDO0FBQUE7QUFBQTtBQUFNLFdBQUtELEtBQUwsQ0FBV0UsTUFBWCxDQUFrQkMsR0FBbEIsQ0FBc0IsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLEtBQWtCO0FBQzVDLGVBQU87QUFBQTtBQUFBLFlBQUssS0FBSyxRQUFRQSxLQUFsQjtBQUEwQkQsZ0JBQU1FO0FBQWhDLFNBQVA7QUFDRCxPQUZLO0FBQU4sS0FERDtBQUtEO0FBWm9DOztBQWV2QyxlQUFlVixTQUFmIiwiZmlsZSI6Ik1vdmllTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY2xhc3MgTW92aWVMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gICAgLy9pbnB1dCBwcm9wczogbW92aWVzPVt7dGl0bGU6XCJzb21ldGhpbmdcIn1dXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICA8ZGl2Pnt0aGlzLnByb3BzLm1vdmllcy5tYXAoKG1vdmllLCBpbmRleCkgPT4ge1xuICAgICAgIHJldHVybiA8ZGl2IGtleT17J212XycgKyBpbmRleH0+e21vdmllLnRpdGxlfTwvZGl2PjtcbiAgICAgfSl9PC9kaXY+IFxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZUxpc3Q7Il19