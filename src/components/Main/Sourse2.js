import React, { Component, Fragment } from "react"
import { connect } from 'react-redux'
import { Header, TreeNode } from 'components'
import { postEvent } from 'actions'

class Sourse2 extends Component{
  clickButton(title) {
    this.props.postEvent(title);
  }
  render(){
    let { events } = this.props
    return (
      <Fragment>
        <Header>
          <p className="sourse__header__title">Big Events Detail Data Sourse2</p>
          <p className="sourse__header__subtitle">you can search big event detail data using infinity scroll</p>
        </Header>
        <div className="tree">
          {events.map((event,index)=><TreeNode node={event} key={index} button={this.clickButton}/>)}
        </div>
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

Sourse2 = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sourse2)

export default Sourse2