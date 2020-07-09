import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Modal } from 'components';
import { store, persistor } from 'store';
import { Home, Start } from 'pages';
import { config } from 'translations';
import { initReactI18next, withTranslation } from 'react-i18next';
import i18n from 'i18next';

i18n.use(initReactI18next).init({ ...config });

const App: React.FC = () => {
  const isProduction = process.env.NODE_ENV === 'production';
  const BASE_ROUTE = isProduction ? '/scoreboard/' : '/';
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Route path={`${BASE_ROUTE}`} exact component={Home} />
          <Route path={`${BASE_ROUTE}start`} component={Start} />
        </Router>

        <Modal />
      </PersistGate>
    </Provider>
  );
};

export default withTranslation()(App);
