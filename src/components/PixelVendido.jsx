import React from 'react';
import './PixelVendido.css'; // Importando o arquivo de estilos

const PixelVendido = () => {
  // Exemplo de valores para o componente (substitua pelos valores reais)
  const pixelsVendidos = 0;
  const totalPixels = 1000000;

  return (
    <div className="pixel-vendido">
      <div className="caixa">
        <span>Pixels Vendidos</span>
        <span>{pixelsVendidos} / {totalPixels}</span>
      </div>
    </div>
  );
};

export default PixelVendido;