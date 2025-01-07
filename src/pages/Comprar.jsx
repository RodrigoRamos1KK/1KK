import React from 'react';
import Navbar from '../components/Navbar';
import WaterfallLogo from '../components/WaterfallLogo';
import WPP from '../img/wpp.svg';
import QR from '../img/qr.jpg';
import LeitorQR from '../img/lerqr.png';
import './Comprar.css';

const Comprar = () => {
  return (
    <div style={{ paddingTop: '70px' }}>
      <Navbar />
      <WaterfallLogo />
      <div className="container">
        <div className="pagamento-container">
        <div className="instrucao-pagamento">
  <div className="ler-container">

    <p>
      <h2>Instruções de Pagamento</h2>
      Passo a passo para comprar pixels na minha página e exibir sua arte:
      <br /><br />
      <strong>1. Escolha a quantidade de pixels:</strong>
      <br />
      Cada pixel custa R$1,00. Você pode comprar quantos desejar.
      <br /><br />
      <strong>2. Efetue o pagamento:</strong>
      <br />
      Escaneie o QR CODE disponível na página ou copie a chave PIX:<button
  className="copiar-chave"
  onClick={() => {
    navigator.clipboard.writeText("00020126770014br.gov.bcb.pix0136901125c9-feaa-48cf-86ec-ad035d2fd7450215A pagina de 1KK5204000053039865802BR5920Rodrigo Miguel Ramos6009Sao Paulo62150511Apginade1Kk63043712");
    alert("Chave PIX copiada com sucesso!");
  }}
>
  Copiar Chave PIX
</button>
      <br />
      
      <br /><br />
      <strong>3. Envie o comprovante e a arte:</strong>
      <br />
      Após o pagamento, envie o comprovante e o arquivo da sua arte pelo WhatsApp clicando no botão abaixo.
      <br /><br />
      <strong>4. Aguarde a validação:</strong>
      <br />
      Sua arte será validada e exibida na área correspondente à quantidade de pixels comprados.
      <br /><br />
      <strong>⚠️ Importante:</strong>
      <br />
      - Certifique-se de enviar uma arte em boa qualidade e no formato adequado.
      <br />
      - O valor mínimo de compra é R$1,00.
      <br />
      - Qualquer dúvida, entre em contato diretamente pelo botão de WhatsApp!
    </p>
    <img src={LeitorQR} alt="Leitor de QR Code" className="ler" />
  </div>
</div>
          <div className="imagens-pagamento">
            <img src={QR} alt="QR Code" className="qr" />
            
          </div>
        </div>
        <a
          href="https://wa.me/+5521978410766"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-link"
        >
          <img src={WPP} alt="WhatsApp" className="whatsapp" />
          <span>Clique Aqui e Envie o comprovante e arte</span>
        </a>
      </div>
    </div>
  );
};

export default Comprar;
