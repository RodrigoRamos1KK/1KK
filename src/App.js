import React, { useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import WaterfallLogo from './components/WaterfallLogo';
import PixelGrid from './components/PixelGrid';

function App() {
  const imageRef = useRef(null);
  const imageWidth = 800;

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
          style={{ maxWidth: '100%' }}
        />
        {imageRef.current && (
          <PixelGrid
            width={imageWidth}
            height={imageRef.current.height}
          />
        )}
      </div>
    </div>
  );
}

export default App;