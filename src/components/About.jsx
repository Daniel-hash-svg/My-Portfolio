import React from 'react';
import "../components/componentsCss.css";

const About = () => {
  return (
    <div className='wrapperAbout'>
        <div className='separator'>
          <div className='description'>Olá! Me chamo Daniel. Sou Desenvolvedor Front-End e Back-End. <br />
            Nasci em Fortaleza, mas moro em Foz do Iguaçu desde 2013. <br />
            Sou graduado em Administração, mas a área que realmente me apaixonei foi a de Tecnologia. Sempre tive interesse porque acredito que é uma área muito dinâmica, se reinventa constantemente. Também acredito no poder que a tecnologia tem de melhorar a vida das pessoas. <br />
            Em 2022 eu concluí o curso da Trybe.
            Quero apresentar minhas redes e meu Portfólio com alguns projetos feitos.
            <br />
          </div>
          <img src="/images/perfil.jpeg" className='imagePerfil' alt='foto-perfil'></img>
        </div>
    </div>
  ) // as fotos só carregaram quando eu coloquei no public e com uma pasta images dentro da public.
}

export default About