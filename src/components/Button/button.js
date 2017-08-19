import React, { Component } from 'react';
import './style.css';

class Button extends Component {

  render() {
    return (
      <a href={this.props.href}
         className={`btn ${this.props.className}`}>{this.props.title}</a>
    );
  }

}

export default Button;