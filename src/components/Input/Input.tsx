import React from 'react';
import css from './Input.module.css';

interface Input {
  type: string;
  label: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string;
  value?: string;
}

export const Input: React.FC<Input> = ({
  type,
  label,
  required,
  onInputChange,
  error = '',
  value = '',
}) => (
  <div className={css.container}>
    <input
      className={css.input}
      type={type}
      required={required}
      onChange={onInputChange}
      value={value}
    />
    <label className={css.label}>{label}</label>
    {Boolean(error.length) && <span className={css.error}>{error}</span>}
  </div>
);
