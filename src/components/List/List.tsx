import React from 'react';
import css from './List.module.css';

interface List {
  onClick?: () => void;
  className?: string;
}

export const List: React.FC<List> = ({ children, onClick, className = '' }) => (
  <div onClick={onClick} className={`${css.list} ${className}`}>
    {children}
  </div>
);
