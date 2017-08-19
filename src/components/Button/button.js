import React, { Component, PropTypes } from 'react';
import './style.css';

class Button extends Component {

  static
    propTypes = {
      href: PropTypes.string,
      className: PropTypes.string,
      onClick: PropTypes.func,
    };

  render() {
    return (
      <a href={this.props.href}
         className={`btn ${this.props.className}`}
         onClick={this.props.onClick}>{this.props.title}</a>
    );
  }

}

export default Button;