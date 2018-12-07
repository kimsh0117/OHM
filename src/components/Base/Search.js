import React, {Component, Fragment} from "react";
import { connect } from 'react-redux'
import { postEvent } from 'actions'

class Search extends Component {
  state = {value: ''}
  handleChange = e => {
    this.setState({value: e.target.value})
  }
  clickButton(title) {
    this.props.postEvent(title);
  }
  // 요기서 재귀로 다 담아놔야 한다.
  findMatches(wordToMatch) {
    let {events} = this.props
    return events.filter(event => {
      const regex = new RegExp(wordToMatch, 'gi');
      return event.title.match(regex)
    });
  }
  displayMatches(){
    const { value } = this.state
    const matchArray = this.findMatches(value)
    matchArray.map((event,index)=>{
      return <li>{event.title}</li>
    })
  }
  render(){
    return (
      <Fragment>
        <input 
          type="text"
          className="search"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Search events"/>
        <ul>
          {this.displayMatches()}
        </ul>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  events: state.eventReducer.events
});

const mapDispatchToProps = dispatch => ({
  postEvent: title => dispatch(postEvent(title))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);