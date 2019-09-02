import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'
import { Modal } from 'components';
import { store, persistor } from 'store';
import { Home, Start } from 'pages';

const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/start" component={Start} />
      </Router>

      <Modal />
    </PersistGate>
  </Provider>
);

export default App;
