import React from 'react';

interface Add {
  onClick: () => void;
  color: string;
}

export const Add: React.FC<Add> = ({ onClick, color }) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill={color}
    onClick={onClick}
  >
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);
