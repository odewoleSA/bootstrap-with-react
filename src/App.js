import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar_2 from './Components/Navbar_2';
import Home from './Components/Pages/Home';
import Footer from './Components/Footer';

function App() {

  return (
      <div className="container">
        <Router>
          <Navbar_2 />
          <Routes>
            <Route path="/pizzaordering" exact element={<Home />} />
          </Routes>
          <Footer />
        </Router>
      </div>
  );
}

export default App;
