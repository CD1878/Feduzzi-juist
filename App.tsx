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
import WebshopPage from './src/pages/WebshopPage';
import CheckoutPage from './src/pages/CheckoutPage';
import AdminPage from './src/pages/AdminPage';
import BroodjesPage from './src/pages/BroodjesPage';
import ScrollToTop from './src/components/ScrollToTop';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/over-ons" element={<OverOnsPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/menu/broodjes" element={<BroodjesPage />} />
        <Route path="/traiteur" element={<TraiteurPage />} />
        <Route path="/maaltijden" element={<MaaltijdenPage />} />
        <Route path="/sfeer" element={<SfeerPage />} />
        <Route path="/werken-bij" element={<WerkenBijPage />} />
        <Route path="/vestigingen/amsterdam" element={<VestigingenAmsterdamPage />} />
        <Route path="/vestigingen/laren" element={<VestigingenLarenPage />} />
        <Route path="/webshop" element={<WebshopPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
