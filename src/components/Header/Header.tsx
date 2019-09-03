import React, { useState } from 'react';
import { Hamburger, World } from 'icons';
import { SideMenu } from 'components/SideMenu/SideMenu';
import { FloatingMenu } from 'components/FloatingMenu/FloatingMenu';
import { useTranslation } from 'react-i18next';
import css from './Header.module.css';

interface Header {
  title: string;
}

export const Header: React.FC<Header> = ({ title, children }) => {
  const [t, i18n] = useTranslation();
  const [sideMenuOpened, setSideMenuOpened] = useState(false);
  const [chooseLanguageOpened, setChooseLanguageOpened] = useState(false);

  return (
    <React.Fragment>
      <SideMenu
        opened={sideMenuOpened}
        closeSideMenu={() => setSideMenuOpened(false)}
      />
      <div className={css.header}>
        <div className={css.menuAndTitle}>
          <Hamburger onClick={() => setSideMenuOpened(true)} />
          <span className={css.title}>{title}</span>
        </div>

        <div className={css.actions}>
          {children}
          <World onClick={() => setChooseLanguageOpened(true)} />
        </div>

        <FloatingMenu
          visible={chooseLanguageOpened}
          onClose={() => setChooseLanguageOpened(false)}
          items={[
            {
              name: t('settings:language-english'),
              action: () => i18n.changeLanguage('en'),
            },
            {
              name: t('settings:language-portuguese'),
              action: () => i18n.changeLanguage('pt'),
            },
          ]}
        />
      </div>
    </React.Fragment>
  );
};
