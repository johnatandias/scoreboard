import React from 'react';

interface Less {
  onClick: () => void;
}

export const Less: React.FC<Less> = ({ onClick }) => (
  <svg
    viewBox="0 0 24 24"
    height="24"
    width="24"
    fill="#757575"
    onClick={onClick}
    style={{ marginRight: 9 }}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z" />
  </svg>
);
