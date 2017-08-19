import React, { Component, PropTypes } from 'react';
import './style.css';

class Button extends Component {

  static
    propTypes = {
      href: PropTypes.string,
      className: PropTypes.string,
      onClick: PropTypes.func,
      target: PropTypes.string,
    };

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