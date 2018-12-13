import React, { Component, Fragment } from "react";
import { connect } from 'react-redux'
import { Header, Hover } from 'components'
import { deleteEvent } from 'actions'

class Audience extends Component{
  clickButton(title) {
    this.props.deleteEvent(title);
  }
  render(){
    const { audience } = this.props;
    return (
      <Fragment>
        <Header>
          <p className="sourse__header__title">Audience</p>
          <p className="sourse__header__subtitle">you can see your events</p>
        </Header>
        <Hover>
          <ul>
          {audience.map((event, i)=>{
              return (
              <li key={i}>
                <span>{event}</span>
                <button onClick={()=>this.clickButton(event)}>-</button>
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
  audience: state.eventReducer.audience
});

const mapDispatchToProps = dispatch => ({
  deleteEvent: title => dispatch(deleteEvent(title))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Audience);