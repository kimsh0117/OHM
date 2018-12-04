import React, { Component, Fragment } from 'react'

class Header extends Component {
  render(){
    return (
      <Fragment>
        <div className="sourse">
          <div className="sourse__header">
            {this.props.children}
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Header