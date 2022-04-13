import React from 'react';
import { Route, Routes } from 'react-router-dom';

import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error404 from './components/Error/404';
import Notes from './components/Notes';

function AppRoutes() {
  return (
    <App>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/notes" element={<Notes />} />
        <Route exact path="/notes/:noteId" element={<Notes />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </App>
  );
}

export default AppRoutes;
