import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Header, Hover } from 'components'
import { postEvent } from 'actions'

class Sourse1 extends Component{
  clickButton(title) {
      this.props.postEvent(title);
  }
  render(){
    const { events } = this.props;
    return (
      <Fragment>
        <Header>
          <p className="sourse__header__title">Big Events Data Sourse1</p>
          <p className="sourse__header__subtitle">you can search big event data using infinity scroll</p>
        </Header>
        <Hover>
          <ul>
            {events.map((event, i)=>{
              return (
              <li key={i}>
                <div>{event.title}</div>
                <button onClick={()=>this.clickButton(event.title)}>+</button>
              </li>
              )
            })}
          </ul>
        </Hover>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  events: state.eventReducer.events,
  audience: state.eventReducer.audience
});

const mapDispatchToProps = dispatch => ({
  postEvent: title => dispatch(postEvent(title))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sourse1);