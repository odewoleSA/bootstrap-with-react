import React, { useState } from 'react'; 
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';

function App() {

  return (
      <div className="container">
        <Router>
        <Navbar />
        <Routes>
          <Route path="/index" exact element={<Home />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
      </div>
      
  );
}

export default App;
