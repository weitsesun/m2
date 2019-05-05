

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {},
      newList: []
    }
  }
  //props.resetMovie
  addName(e) {
    // console.log('here')
    e.preventDefault();
    if(e.target.value !== "") {
      this.setState({
        name: {title: e.target.value}
      })
    }
  }

  addNewMovie(e) {
    e.preventDefault();
    this.props.reset(this.state.name);
  }

  render(){
    return(
      <form onSubmit={this.addNewMovie.bind(this)}>
        <input type="text" onChange={this.addName.bind(this)}/>
        <input type="submit" value="Add"/>
      </form>
    )
  }
}

export default AddMovie;