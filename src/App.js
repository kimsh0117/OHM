import React, { Component, Fragment } from 'react'
import { Route } from "react-router-dom";

import { Nav, Home, Audience, Sourse1, Sourse2 } from "components";

import 'styles/main.scss'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route path="/" render={props => <Nav {...props} />} />
        <Route exact path="/" component={Home} />
        <Route path="/sourse/1" component={Sourse1} />
        <Route path="/sourse/2" component={Sourse2} />
        <Route path="/audience" component={Audience} />
      </Fragment>
    );
  }
}

export default App;
