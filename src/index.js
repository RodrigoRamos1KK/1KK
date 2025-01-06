import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Comprar from './pages/Comprar';
import Sobre from './pages/Sobre';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/comprar" element={<Comprar />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();