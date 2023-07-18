import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/HomePage';
import RegForm from './components/RegForm';
import Signin from './components/Signin';
import Movies from './components/Movies';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/RegForm' element={<RegForm/>}/>
      <Route exact path='/Signin' element={<Signin/>}/>
      <Route exact path='/movies' element={<Movies/>}/>
    </Routes>
  </Router>
);
