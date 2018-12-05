import React, { Component } from 'react'

export default class Hover extends Component {
  state = {
    hover: false
  }
  onMouseEnterHandler = () => {
    this.setState({ hover: true })
  }
  onMouseLeaveHandler = () => {
    this.setState({ hover: false })
  }
  render(){
    let outer;
    outer = this.state.hover ? "hover-hover" : "hover-nomal"
    return (
      <div className={outer}>
        <div 
          className="hover__content"
          onMouseEnter={this.onMouseEnterHandler}
          onMouseLeave={this.onMouseLeaveHandler}>
        {this.props.children}
        </div>
      </div>
    )
  }
}