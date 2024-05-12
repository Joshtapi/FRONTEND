import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './pages/Login';
import CreateAccountScreen from './pages/createAccount';
import CreateAccount from './pages/createAccount_parte02';

function App() {
  return (
    <Router>
      <Routes> 
        <Route exact path="/" element={<LoginScreen />} />
        <Route path="/createAccount" element={<CreateAccountScreen />} />
        <Route path="/createAccount-02" element={<CreateAccount />} />
      </Routes>
    </Router>
  );
}

export default App;
