import React from 'react';
import "../components/componentsCss.css";

const Knowledge = () => {
  return (
    <div className='wrapperKnowledge'>
      
        <h1 className='meuH1'>Habilidades e Tecnologias que uso </h1>
        <div className='knowledgeContent'>
            <div className='listKnowledge'>
              <span>REACT</span>
              <span>JAVASCRIPT</span>
              <span>NODE.JS</span>
              <span>CONTEXT API</span>
              <span>REDUX</span>
              <span>API RESTFUL</span>
              <span>GIT</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>
        
            <img src='/images/newDrawing.png'  className='knowledgeDrawing' alt='imageKnowledge'></img>
        
        </div>
      

    </div>
  )
}

export default Knowledge;