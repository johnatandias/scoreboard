import React, { useRef } from 'react';
import css from './FloatingMenu.module.css';
import { useOnClickOutside } from 'hooks';

export interface FloatingMenuItem {
  name: string;
  action: () => void;
}

interface FloatingMenu {
  visible: boolean;
  items: FloatingMenuItem[];
  onClose: () => void;
}

interface Item extends FloatingMenuItem {
  onClose: () => void;
}

const Item: React.FC<Item> = ({ name, action, onClose }) => (
  <span
    className={css.itemLabel}
    onClick={() => {
      action();
      onClose();
    }}
  >
    {name}
  </span>
);

export const FloatingMenu: React.FC<FloatingMenu> = ({
  visible,
  items,
  onClose,
}) => {
  const boxReference = useRef<HTMLDivElement>(null);
  useOnClickOutside(boxReference, onClose);

  if (!visible) return null;

  return (
    <div ref={boxReference} className={css.floatingMenu}>
      {items.map((item: FloatingMenuItem) => (
        <React.Fragment key={item.name}>
          <Item {...item} onClose={onClose} />
        </React.Fragment>
      ))}
    </div>
  );
};
