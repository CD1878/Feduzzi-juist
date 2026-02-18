import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './src/pages/HomePage';
import MenuPage from './src/pages/MenuPage';
import MaaltijdenPage from './src/pages/MaaltijdenPage';
import TraiteurPage from './src/pages/TraiteurPage';
import SfeerPage from './src/pages/SfeerPage';
import OverOnsPage from './src/pages/OverOnsPage';
import WerkenBijPage from './src/pages/WerkenBijPage';
import VestigingenAmsterdamPage from './src/pages/VestigingenAmsterdamPage';
import VestigingenLarenPage from './src/pages/VestigingenLarenPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/menu/maaltijden" element={<MaaltijdenPage />} />
        <Route path="/menu/traiteur" element={<TraiteurPage />} />
        <Route path="/sfeer" element={<SfeerPage />} />
        <Route path="/over-ons" element={<OverOnsPage />} />
        <Route path="/werken-bij" element={<WerkenBijPage />} />
        <Route path="/vestigingen/amsterdam" element={<VestigingenAmsterdamPage />} />
        <Route path="/vestigingen/laren" element={<VestigingenLarenPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
