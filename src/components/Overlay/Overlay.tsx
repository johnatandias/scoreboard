import React from 'react';
import css from './Overlay.module.css';
import { useOnClickOutside } from 'hooks';

interface Overlay {
  className?: string;
  childrenReference: React.RefObject<any>;
  onClose: () => void;
}

export const Overlay: React.FC<Overlay> = ({
  children,
  childrenReference,
  onClose,
  className = '',
}) => {
  useOnClickOutside(childrenReference, onClose);
  return <div className={`${css.overlay} ${className}`}>{children}</div>;
};
