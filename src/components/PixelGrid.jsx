import React from 'react';
import './PixelGrid.css';

const PixelGrid = ({ width, height }) => {
  // Calcula o número de quadrados necessários para cobrir a imagem
  const totalPixels = width * height;

  // Cria um array de quadrados
  const pixels = Array.from({ length: totalPixels }).map((_, index) => (
    <div key={index} className="pixel" />
  ));

  return (
    <div className="pixel-grid" style={{ width: `${width}px`, height: `${height}px` }}>
      {pixels}
    </div>
  );
};

export default PixelGrid;