import React from 'react';
import { Hamburger } from '../Hamburger/Hamburger';
import css from './Header.module.css';

interface Header {
  title: string;
}

export const Header: React.FC<Header> = ({ title, children }) => (
  <div className={css.header}>
    <div className={css.menuAndTitle}>
      <Hamburger />
      <span className={css.title}>{title}</span>
    </div>
    <div className={css.actions}>{children}</div>
  </div>
);
