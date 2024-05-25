import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './pages/Login';
import CreateAccountScreen from './pages/createAccount';
import CreateAccount from './pages/createAccount_parte02';
import Ayuda from './pages/ayuda';
import BuscarScreen from './pages/buscar';
import RecuperarScreen from './pages/recuperar';

function App() {
  return (
    <Router>
      <Routes> 
        <Route exact path="/login" element={<LoginScreen />} />
        <Route path="/createAccount" element={<CreateAccountScreen />} />
        <Route path="/createAccount-02" element={<CreateAccount />} />
        <Route path="/ayuda" element={<Ayuda />} />
        <Route path="/buscarCuenta" element={<BuscarScreen />} />
        <Route path="/Recuperacion" element={<RecuperarScreen />} />
      </Routes>
    </Router>
  );
}

export default App;



