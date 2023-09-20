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
          <Route exact path="/portfolio"  element={ <Home />} /> 
          <Route exact path="/portfolios"  element={ <Portfolio />} /> 
          <Route exact path="/contect"  element={ <Contect />} /> 
          <Route  element={ <Home />} /> 

      </Routes>
    </>
  );
}

export default App;
