import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getEvents } from 'actions'

class Home extends Component {
  componentDidMount(){
    this.props.getEvents();
  }
  clickButton(path) {
    this.props.history.push(path);
  }
  render(){
    return (
      <div className="home">
        <div className="home__sourse1">
          <h1>Sourse1</h1>
          <p>Who want to see in 1th depth events</p>
          <button 
            type="button"
            onClick={()=>this.clickButton("/sourse/1")}>
            sourse1
          </button>
        </div>
        <div className="home__sourse2">
          <h1>Sourse2</h1>
          <p>Who want to see all depth events</p>
          <button 
            type="button"
            onClick={()=>this.clickButton("/sourse/2")}>
            sourse2
          </button>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  events: state.eventReducer.events
})

const mapDispatchToProps = dispatch => ({
  getEvents: () => dispatch(getEvents.request())
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);