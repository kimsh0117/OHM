import React, {Component} from "react";

class Search  extends Component {
  constructor(props){
    super(props)
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    this.setState({value: e.target.value})
  }
  render(){
    return (
      <input 
        type="text"
        className="search"
        value={this.state.value}
        onChange={this.handleChange}
        placeholder="Search events"/>
    )
  }
}

export default Search;