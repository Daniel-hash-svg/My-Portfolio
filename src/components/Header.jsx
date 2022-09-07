import React from 'react';
import "../components/componentsCss.css";
import { Link, animateScroll as scroll } from "react-scroll";



const Header = ({wrapperContact, wrapperKnowledge, separator, portfolio}) => { // props que veio do Contact.jsx. Essa props da div principal do Contact. Passei ela por props no arquivo App.js
  return (
    <div className='header'>
        <p className='meuNome'>DANIEL CECI</p>
        <div className='headerTopics'>
            <Link
                activeClass="active"
                to="wrapperKnowledge"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
            >  <p className='topic'>HABILIDADES</p></Link>
            <Link
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
            >  <p className='topic'>PORTFÓLIO</p>  </Link>
            <Link
                activeClass="active"
                to="wrapperContact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
            >  <p className='topic'>CONTATOS</p></Link>
        </div>
        
    </div>
  )
}
export default Header

