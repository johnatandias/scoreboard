/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef } from 'react';
import { Overlay } from 'components/Overlay/Overlay';
import { useTranslation } from 'react-i18next';
import css from './SideMenu.module.css';

interface SideMenu {
  opened: boolean;
  closeSideMenu: () => void;
}

const Separator: React.FC<{ label: string }> = ({ label }) => (
  <span className={css.separator}>{label}</span>
);

const Item: React.FC<{ label: string; onClick: () => void }> = ({
  label,
  onClick,
}) => (
  <span className={css.item} onClick={onClick}>
    {label}
  </span>
);

export const SideMenu: React.FC<SideMenu> = ({ opened, closeSideMenu }) => {
  const sideMenuReference = useRef<HTMLDivElement>(null);
  const [t] = useTranslation();

  return (
    <Overlay
      childrenReference={sideMenuReference}
      className={opened ? '' : css.closed}
      onClose={closeSideMenu}
    >
      <div ref={sideMenuReference} className={css.sideMenu}>
        <h3>{t('app:title')}</h3>
      </div>
    </Overlay>
  );
};
