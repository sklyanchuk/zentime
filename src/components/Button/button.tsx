import * as React from 'react';

import './style.css';

type ButtonProps = {
    href: string;
    target?: string;
    className: string;
    title: string;
    onClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({ href, target, className, title, onClick }) => (
    <a href={href} target={target} className={`btn ${className}`} onClick={onClick}>
        {title}
    </a>
);
