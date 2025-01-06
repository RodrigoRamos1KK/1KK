import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Estilos específicos para a Navbar
import PixelVendido from './PixelVendido'

const Navbar = () => {
  // Exemplo de contadores de seguidores (substitua pelos valores reais)
  const tiktokFollowers = 0;
  const instagramFollowers = 1;

  return (
    <nav className="navbar">
      <img src="/img/logo.png" alt="Logo" className="logo" />
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">HOME</Link>
        </li>
        <li className="nav-item">
          <Link to="/comprar" className="nav-link">COMPRAR</Link>
        </li>
        <li className="nav-item">
          <Link to="/sobre" className="nav-link">SOBRE</Link>
        </li>
      </ul>

      {/* Adicionando as logos e contadores de seguidores */}
      <div className="social-media-links">
        <a
          href="https://www.tiktok.com/@apaginade1kk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/img/tiktok.png" alt="TikTok" className="social-media-logo" />
          <span>{tiktokFollowers}</span>
        </a>
        <a
          href="https://www.instagram.com/apaginade1kk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/img/insta.png" alt="Instagram" className="social-media-logo" />
          <span>{instagramFollowers}</span>
        </a>
      </div>
     <PixelVendido/>
    </nav>
  );
};

export default Navbar;