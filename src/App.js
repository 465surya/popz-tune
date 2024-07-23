import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navilayout from './Pages/Navilayout';
import Piano from './Piano/Piano';
import { useState } from 'react';
import Drums from './drums/Drums';
import Purchase from './Purchase/Pchase';
import Home from './Home/home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navilayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/piano" element={<Piano />} />
            <Route path="/pchase" element={<Purchase />} />
            <Route path="/drums" element={<Drums />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
