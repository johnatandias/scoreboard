import React from 'react';

interface Remove {
  onClick: () => void;
  color: string;
}

export const Remove: React.FC<Remove> = ({ onClick, color }) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill={color}
    onClick={onClick}
  >
    <path d="M19 13H5v-2h14v2z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);
