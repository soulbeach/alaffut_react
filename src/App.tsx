import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import Navigation from './components/Navigation';
import logo from './images/logos/logoBallon.png';
import Accueil from './pages/Accueil';
import AdminLogin from './admin/AdminLogin';
import Agenda from './pages/Agenda';
import APropos from './pages/APropos';
import Contact from './pages/Contact';
import Culture from './pages/Culture';
import Evenements from './pages/Evenements';
import LifeStyle from './pages/LifeStyle';
import ListeRest from './pages/ListeRest';
import Mentions from './pages/Mentions';
import Restaurants from './pages/Restaurants';
import './styles/App.css';
import AjoutCommerce from './admin/AjoutCommerce';
import AjoutEvenements from './admin/AjoutEvenemen';
import ModifierCommerce from './admin/ModifierCommerce';
import ModifierEvenement from './admin/ModifierEvenement';

function App() {
  return (
    <BrowserRouter> {/* en top level */}
    <Navigation/>
    <Routes> {/* Ici : injecte les composants en fonction de la route, du chemin dans l'url */}
        <Route path="/" element={<Accueil/>} />
        <Route path="/restaurants" element={<Restaurants/>} />
        <Route path="/lifestyle" element={<LifeStyle/>} />
        <Route path="/culture-aides" element={<Culture/>} />
        <Route path="/evenements" element={<Evenements/>} />
        <Route path="/apropos" element={<APropos/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/agenda" element={<Agenda/>} />
        <Route path="/listeresto" element={<ListeRest/>} />
        <Route path="/mentionslegales" element={<Mentions/>} />


        <Route path="/admin" element={<AdminLogin/>} />
        <Route path="/ajoutercommerce" element={<AjoutCommerce/>} />
        <Route path="/ajouterevenement" element={<AjoutEvenements/>} />
        <Route path="/modifiercommerce" element={<ModifierCommerce/>} />
        <Route path="/modifierevenement" element={<ModifierEvenement/>} />
        

    </Routes>

    <Footer/>
</BrowserRouter>
  );
}

export default App;
