import React from 'react';
import {Routes,Route } from "react-router-dom";
import Nav from './component/Nav';
import Myintro from './component/Myintro';
import Home from './Home';
import Skills from './component/Skills';
import Portfolio from './Portfolio';
import Contect from './Contect';
 const App = () => {
  return (
    <>
       <Nav />
      <Routes>
          <Route exact path="/"  element={ <Home/>} /> 
          <Route exact path="/myintro"  element={ <Myintro/>} /> 
          <Route exact path="/skills"  element={ <Skills />} /> 
          <Route exact path="/service"  element={ <h1> home page</h1>} /> 
          <Route exact path="/portfolio"  element={ <Portfolio />} /> 
          <Route exact path="/contect"  element={ <Contect />} /> 
      </Routes>
    </>
  );
}

export default App;
