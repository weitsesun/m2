
class MovieList extends React.Component{
  constructor(props) {
    super(props);
  }

    //input props: movies=[{title:"something"}]
  render() {
    return (
     <div>{this.props.movies.map((movie, index) => {
       return <div key={'mv_' + index}>{movie.title}</div>;
     })}</div> 
    )
  }
}

export default MovieList;