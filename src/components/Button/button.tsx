import * as React from "react";

import "./style.css";

interface Props {
  href: string;
  target?: string;
  className: string;
  title: string;
  onClick: () => void;
}

export const Button: React.FC<Props> = ({
  href,
  target,
  className,
  title,
  onClick
}) => (
  <a
    href={href}
    target={target}
    className={`btn ${className}`}
    onClick={onClick}
  >
    {title}
  </a>
);
