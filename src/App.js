import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Components/About';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <About />
      <Footer />
      
    </BrowserRouter>
  );
}

export default App;
