import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';


export default function App():React.ReactElement {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/'>
          <Route index element={ <Home/> } />
        </Route>
      </Routes>

    </BrowserRouter>
  );
}


