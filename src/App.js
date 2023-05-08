import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import About from './Components/About';
import Home from './pages/home';
import Team from './pages/team';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='team' element={<Team />} />
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
