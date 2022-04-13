/* eslint react/jsx-filename-extension: "off" */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';

// Rutas
import AppRoutes from './routes';

// Store de redux
import configureStore from './shared/redux/configureStore';

// Configure store de Redux
const store = configureStore(window.initialState);

// DOM
const rootElement = document.getElementById('root');

// Envoltorio de la aplicación
const renderApp = (Component) => {
  render(
    <Provider store={store}>
      <Router>
        <Component />
      </Router>
    </Provider>,
    rootElement
  );
};

renderApp(AppRoutes);
