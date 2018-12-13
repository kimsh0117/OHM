import React, { Component } from 'react'

export default class TreeNode extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	visible: false,
    };
  }
  toggle = () => {
    this.setState({visible: !this.state.visible});
  };
  
  render() {
  	var childNodes;
    var className;
    if (this.props.node.childNodes != null) {
      let { button } = this.props
      childNodes = this.props.node.childNodes.map(function(node, index) {
        return <TreeNode node={node} button={button} key={index}/>
      });

			className = 'togglable';
      if (this.state.visible) {
        className += ' togglable-down';
      } else {
        className += ' togglable-up';
      }
    }

    var style;
    if (!this.state.visible) {
      style = {display: "none"};
    }
    let {title} = this.props.node
    return (
      <li>
        <span onClick={this.toggle} className={className}>{title}</span>
        <button onClick={()=>this.props.button(title)}>+</button>
        <ul style={style}>{childNodes}</ul>
      </li>
    );
  }
}