import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Partnership from './pages/Partnership.jsx';
import Sponsorship from './pages/Sponsorship.jsx';
import Mentor from './pages/Mentor.jsx';
import Coach from './pages/Coach.jsx';
import Donation from './pages/Donation.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/sponsorship" element={<Sponsorship />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/coach" element={<Coach />} />
        <Route path="/donation" element={<Donation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
