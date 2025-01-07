// src/pages/Sobre.js
import React from 'react';
import Navbar from '../components/Navbar';
import WaterfallLogo from '../components/WaterfallLogo'; // Importe o componente corretamente
import WPP from '../img/wpp.svg';
import './Sobre.css'

const Sobre = () => {
  return (
    <div style={{ paddingTop: '70px' }}> {/* Adiciona padding-top igual à altura da Navbar */}
      <Navbar />
      <WaterfallLogo /> {/* Adicione o efeito de cachoeira */}
      <div className="sobre-container">
      <h1>Sobre Nós - A Plataforma de Pixels</h1>
      <p>
        Na Pagina de 1KK, oferecemos uma maneira única e inovadora de promover sua marca: vendemos pixels! Isso mesmo, nossos usuários podem adquirir espaços individuais na nossa plataforma para divulgar seus sites, redes sociais e logos, criando um espaço digital personalizado para atrair novos públicos e aumentar a visibilidade online.
      </p>
      <h2>Como Funciona:</h2>
      <ul>
        <li>
          <strong>Escolha Seu Espaço:</strong> Cada pixel da nossa página é um espaço valioso. Escolha quantos pixels deseja adquirir e o colocaremos de acordo com a disponibilidade [O centro está reservado para futuro projeto]. 
        </li>
        <li>
          <strong>Divulgue Sua Marca:</strong> Após selecionar seus pixels, você pode associar seu espaço a qualquer tipo de conteúdo visual: logo, link para o seu site ou redes sociais, ou até mesmo um banner promocional. Assim, sua marca ficará visível para outros usuários e visitantes da plataforma.
        </li>
        <li>
          <strong>Visibilidade Máxima:</strong> À medida que mais pessoas acessam e interagem com nossa plataforma, seu espaço ficará exposto a uma audiência crescente. Quanto mais pixels você adquire, mais destaque você ganha, aumentando suas chances de engajamento.
        </li>
        <li>
          <strong>Envíe Sua Arte:</strong> Ao adquirir seus pixels, basta enviar a arte que deseja exibir (logo, link, imagem) diretamente para o nosso WhatsApp, junto com o comprovante de pagamento. Nós nos encarregamos de adicionar sua arte no espaço adquirido de forma rápida e profissional.
        </li>
        <li>
          <strong>Apoio ao Investimento e Criação de Criptomoeda::</strong> Ao adquirir pixels, você não está apenas promovendo sua marca, mas também apoiando um projeto inovador de criação de uma criptomoeda própria. Cada comprador de pixels receberá uma porcentagem da criptomoeda a ser lançada, proporcional à quantidade de pixels adquiridos e ao tamanho do bloco criado (a ser definido). Esta é uma oportunidade de investimento com potencial de valorização, além de contribuir para o crescimento da nossa comunidade digital.
        </li>
      </ul>
      <h2>Por Que Comprar Pixels?</h2>
      <p>
        Esta é uma maneira eficaz de colocar sua marca diante de novos olhos e criar uma rede de contatos. Se você tem um negócio, um site, ou até mesmo um perfil de redes sociais, nosso sistema oferece uma forma econômica e criativa de alcançar um público mais amplo. Seja criativo, escolha um número de pixels que se encaixe no seu orçamento e comece a ampliar sua presença digital hoje mesmo.
      </p>
      <p>
        Transforme cada pixel em uma oportunidade!
      </p>
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

export default Sobre;
