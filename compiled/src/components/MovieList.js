
class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }

  //input props: movies=[{title:"something"}]
  render() {
    return React.createElement(
      "div",
      null,
      this.props.movies.map((movie, index) => {
        return React.createElement(
          "div",
          { id: "movieTitle", key: 'mv_' + index },
          movie.title
        );
      })
    );
  }
}

export default MovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicmVuZGVyIiwibW92aWVzIiwibWFwIiwibW92aWUiLCJpbmRleCIsInRpdGxlIl0sIm1hcHBpbmdzIjoiO0FBQ0EsTUFBTUEsU0FBTixTQUF3QkMsTUFBTUMsU0FBOUIsQ0FBd0M7QUFDdENDLGNBQVlDLEtBQVosRUFBbUI7QUFDakIsVUFBTUEsS0FBTjtBQUNEOztBQUVEO0FBQ0FDLFdBQVM7QUFDUCxXQUNFO0FBQUE7QUFBQTtBQUNHLFdBQUtELEtBQUwsQ0FBV0UsTUFBWCxDQUFrQkMsR0FBbEIsQ0FBc0IsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLEtBQWtCO0FBQ3ZDLGVBQU87QUFBQTtBQUFBLFlBQUssSUFBRyxZQUFSLEVBQXFCLEtBQUssUUFBUUEsS0FBbEM7QUFBMENELGdCQUFNRTtBQUFoRCxTQUFQO0FBQ0QsT0FGQTtBQURILEtBREY7QUFPRDtBQWRxQzs7QUFpQnhDLGVBQWVWLFNBQWYiLCJmaWxlIjoiTW92aWVMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jbGFzcyBNb3ZpZUxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIC8vaW5wdXQgcHJvcHM6IG1vdmllcz1be3RpdGxlOlwic29tZXRoaW5nXCJ9XVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHt0aGlzLnByb3BzLm1vdmllcy5tYXAoKG1vdmllLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiA8ZGl2IGlkPVwibW92aWVUaXRsZVwiIGtleT17J212XycgKyBpbmRleH0+e21vdmllLnRpdGxlfTwvZGl2PjtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW92aWVMaXN0OyJdfQ==