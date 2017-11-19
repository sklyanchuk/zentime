import * as React from 'react';
import './style.css';

export interface IButtonProps {
  href: string;
  target?: string;
  className: string;
  title: string;
  onClick: () => void;
}

export const Button: React.SFC<IButtonProps> = props => (
  <a href={props.href}
     target={props.target}
     className={`btn ${props.className}`}
     onClick={props.onClick}>{props.title}
  </a>
);
