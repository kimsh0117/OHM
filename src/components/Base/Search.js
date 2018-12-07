import React, {Component} from "react";
import { connect } from 'react-redux'
import { postEvent } from 'actions'
import { SearchList } from 'components'

const regfilter = (wordToMatch,title)=>{
  const regex = new RegExp(wordToMatch, 'gi');
  return title.match(regex)
}

class Search extends Component {
  state = {value: '', match: []}
  handleChange = e => {
    this.setState({value: e.target.value})
    this.findMatches(this.state.value,regfilter)
  }
  clickButton(title) {
    this.props.postEvent(title);
  }
  // 요기서 재귀로 다 담아놔야 한다.
  findMatches(wordToMatch,filter) {
    let {events} = this.props;
    let result = [];
    function recursion(current,f){
      if(f(wordToMatch,current.title)){
        result.push(current.title)
      }
      // Извините не могу решить
      // if(Object.keys(current).indexOf('childNodes')>-1){
      //   for(var i=0; i < current.childNodes.length; i+=1){
      //     recursion(current.childNodes[i],filter);
      //   }
      // }
    }
    events.forEach(event=>recursion(event,filter))
    this.setState({match: result})
  }

  render(){
    return (
      <div className="search">
        <input 
          type="text"
          className="search__input"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Search events"/>
        <SearchList>
          {this.state.match.map((event, i)=>{
            return (
              <li key={i}>
                <div>{event}</div>
                <button onClick={()=>this.clickButton(event)}>+</button>
              </li>
            )
          })}
        </SearchList>
      </div>
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