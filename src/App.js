import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import WaterfallLogo from './components/WaterfallLogo';

function App() {
  const imageRef = useRef(null);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  // Função para recalcular as coordenadas com base no tamanho da imagem
  const getScaledCoords = (coords, originalWidth, originalHeight) => {
    const scaleX = imageSize.width / originalWidth;
    const scaleY = imageSize.height / originalHeight;
    return coords.map((coord, index) => {
      return index % 2 === 0 ? coord * scaleX : coord * scaleY;
    });
  };

  // Atualiza o tamanho da imagem quando a janela é redimensionada
  useEffect(() => {
    const handleResize = () => {
      if (imageRef.current) {
        setImageSize({
          width: imageRef.current.offsetWidth,
          height: imageRef.current.offsetHeight,
        });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Chama a função inicialmente para definir o tamanho

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Coordenadas originais (baseadas no tamanho original da imagem)
  const originalCoords = [0, 0, 1, 2]; // x1, y1, x2, y2
  const scaledCoords = getScaledCoords(originalCoords, 800, 600); // Supondo que a imagem original tenha 800x600

  return (
    <div className="App" style={{ paddingTop: '60px' }}>
      <Navbar />
      <WaterfallLogo />
      <div className="image-container">
        <img
          ref={imageRef}
          src="/img/1kk.png"
          alt="1kk"
          className="center-image"
          style={{ maxWidth: '100%', height: 'auto' }}
          useMap="#image-map"
        />
        <map name="image-map">
          <area
            shape="rect"
            coords={scaledCoords.join(',')} // Coordenadas escaladas
            href="https://www.instagram.com/jorge_winiciuscr/"
            alt="Área clicável"
            title="https://www.instagram.com/jorge_winiciuscr/" // Exibe a URL como tooltip
          />
        </map>
      </div>
    </div>
  );
}

export default App;
