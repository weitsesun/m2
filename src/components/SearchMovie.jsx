import movies from "../data/exampleMovie.js";


class SearchMovie extends React.Component{
  constructor(props) {
    super(props)
  }

  //this.props.func
  render() {
    return (
      <form onSubmit={this.props.search}>
        <input type="text" name="textArea" onChange={this.props.textbar}/>
        <input type="submit" value="Search"/>
      </form>
    )
  }
}

export default SearchMovie;