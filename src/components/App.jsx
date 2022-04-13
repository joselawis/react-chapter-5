import React from 'react';
import { element } from 'prop-types';
import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';

import './App.css';

function App(props) {
  const { children } = props;
  return (
    <div className="App">
      <Header title="Routing" />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
}

App.propTypes = {
  children: element,
};

export default App;
