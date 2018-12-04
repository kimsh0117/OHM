import React, { Component } from "react";
import { Header } from 'components'

class Audience extends Component{
  render(){
    return (
      <Header>
        <p className="sourse__header__title">Audience</p>
        <p className="sourse__header__subtitle">you can see your events</p>
      </Header>
    )
  }
}

export default Audience;