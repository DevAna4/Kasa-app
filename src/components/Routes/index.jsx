import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Accommodation from '../../pages/Accommodation';
import About from '../../pages/About';
import Error404 from '../../pages/Error404';
import NavBar from '../Navbar';

function index() {
  return (
    <Router>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Fiche-Logement' element={<Accommodation />} />
          <Route path='/A-propos' element={<About />} />
          <Route path='/404' element={<Error404 />} />
        </Routes>
    </Router>
    
  )
}

export default index
