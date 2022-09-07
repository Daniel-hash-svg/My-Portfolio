import React from 'react'

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <h1 className='classEspecifica'>Portfólio</h1>
       <div className='allProjects'>
        
        <div className='project'>
         
           <a href="https://super-mario-alpha.vercel.app/" target="_blank" rel="noreferrer" className='linksProject'>JOGO DO MARIO </a>
           <br /> <br />
           <a href="https://github.com/Daniel-hash-svg/Super-Mario-s-Game" target="_blank" rel="noreferrer" className='linksProject'>REPOSITÓRIO</a>
         
           <div className='projectImage'>
           <img src='/images/9c1c9f9603ef62a1c308c09b2b4669e6.jpg' className='imagesPortfolio' alt=''></img>
           </div>
        </div>

        <div className='project'>
         
         <a href="" target="_blank" rel="noreferrer" className='linksProject'>E-COMMERCE </a>
         <br /> <br />
         <a href="https://github.com/Daniel-hash-svg/e-commerce-musical-instruments" target="_blank" rel="noreferrer" className='linksProject'>REPOSITÓRIO</a>
       
         <div className='projectImage'>
         <img src='/images/images.jpeg' className='imagesPortfolio' alt=''></img>
         </div>
      </div>

        <div className='project'>
         
         <a href="https://daniel-hash-svg.github.io/Controle-De-Estoque/" target="_blank" rel="noreferrer" className='linksProject'>CONTROLE DE ESTOQUE </a>
         <br /> <br />
         <a href="https://github.com/Daniel-hash-svg/Controle-De-Estoque" target="_blank" rel="noreferrer" className='linksProject'>REPOSITÓRIO</a>
       
         <div className='projectImage'>
         <img src='/images/photo.jpg' className='imagesPortfolio' alt=''></img>
         </div>
      </div>

      

       </div>
      </div>
  )
}

export default Portfolio