import React, { Component } from 'react';
import './style.css';

class Button extends Component {

  render() {
    return (
      <a href={this.props.href}
         target={this.props.target}
         className={`btn ${this.props.className}`}
         onClick={this.props.onClick}>{this.props.title}
      </a>
    );
  }

}

export default Button;