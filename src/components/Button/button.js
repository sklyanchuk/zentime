import React from 'react';
import './style.css';

export function Button(props) {
  return (
    <a href={props.href}
       target={props.target}
       className={`btn ${props.className}`}
       onClick={props.onClick}>{props.title}
    </a>
  );
}
