import React from 'react';
import css from './Button.module.css';

interface Button {
  label: string;
  onClick: () => void;
  fav?: boolean;
  color?: string;
}

export const Button: React.FC<Button> = ({ label, onClick, fav, color }) => (
  <button
    className={`${css.button} ${fav ? css.fav : ''}`}
    onClick={onClick}
    style={color ? { backgroundColor: color } : undefined}
  >
    {label}
  </button>
);
