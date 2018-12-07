import React, { Component, Fragment } from 'react'

class SearchList extends Component {
  render(){
    return (
      <Fragment>
        <ul className="search__ul">
          {this.props.children}
        </ul>
      </Fragment>
    )
  }
}

export default SearchList