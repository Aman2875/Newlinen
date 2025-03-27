import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Laundry from './components/Pages/laundry';
import Rental from './components/Pages/Rental';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home/Home';
  

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/laundry" element={<Laundry />} />
            <Route path="/rental" element={<Rental />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );    
}

export default App;
