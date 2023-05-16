import React from 'react';
import Enesetutvustus from "./pages/Enesetutvustus";
import Moodulid from './pages/Moodulid';
import { Routes, Route, Link } from "react-router-dom";
import Praktika from './pages/Praktika';
import Koolitused from './pages/Koolitused';
import Eneserefleksioon from './pages/Eneserefleksioon';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Enesetutvustus />} />
        <Route path="/moodulid" element={<Moodulid />} />
        <Route path="/praktika" element={<Praktika />} />
        <Route path="/koolitused" element={<Koolitused />} />
        <Route path="/eneserefleksioon" element={<Eneserefleksioon />} />
      </Routes>
    </>
  );
}

export default App;
