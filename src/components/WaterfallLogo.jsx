// src/components/WaterfallLogo.jsx
import React from 'react';
import moeda from '../img/moeda.png'; // Importe a logo
import './WaterfallLogo.css'; // Estilos para o efeito de cachoeira

const WaterfallLogo = () => {
  // Função para gerar posições aleatórias
  const getRandomPosition = () => {
    const top = Math.random() * 100; // Posição vertical aleatória (0% a 100%)
    const left = Math.random() * 100; // Posição horizontal aleatória (0% a 100%)
    return { top: `${top}%`, left: `${left}%` };
  };

  // Cria 50 moedas com posições aleatórias
  const moedas = Array.from({ length: 50 }).map((_, index) => (
    <div
      key={index}
      className="waterfall-moeda"
      style={{
        ...getRandomPosition(),
        width: '70px',
        height: '70px',
      }}
    >
      <img src={moeda} alt="moeda" style={{ width: '100%', height: '100%' }} />
    </div>
  ));

  return <div>{moedas}</div>;
};

export default WaterfallLogo;