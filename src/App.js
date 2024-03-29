import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import './App.css';

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/project-gallery" element={<Projects />}/>
      </Routes>
    </BrowserRouter>
      
  )
}
export default App;
