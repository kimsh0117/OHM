import React, { Component } from "react"
import { NavLink } from "react-router-dom"

import { Search } from 'components'

export default class Nav extends Component {
  clickLogo() {
    this.props.history.push("/");
  }
  render(){
    return (
      <header className="header">
        <div className="header__container">
          <h1 
            className="header__container__headline"
            onClick={this.clickLogo.bind(this)}>O.H.M
          </h1>
          <nav className="header__container__nav">
          {(this.props.location.pathname === '/') ? '' : <Search />}
          <ul className="header__container__nav_ul">
            <li><NavLink to="/sourse/1">sourse1</NavLink></li>
            <li><NavLink to="/sourse/2">sourse2</NavLink></li>
            <li><NavLink to="/audience">audience</NavLink></li>
          </ul>
          </nav>
        </div>
      </header>
    )
  }
}

