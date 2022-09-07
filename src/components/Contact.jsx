import React from 'react'

const Contact = () => {
  return (
    <div  className='wrapperContact'>
         <h1>Contatos: </h1>
         <br /> <br />

          <div className='contact'>
            <img src='/images/gmail2.png' className='logosUmDois' alt=''></img> <br /> <h2>danielceci96@gmail.com</h2> <br /> <br /> <br />
            <img src='/images/whatsAppLogo.png' className='logosUmDois' alt=''></img> <br /> <h2>(45) 99997-6377</h2> <br /> <br /> <br />
            <h2>REDES:</h2> <br />
             <div className='contactLogos'>
               <a href="https://github.com/Daniel-hash-svg" target="_blank" rel="noreferrer"><img src="/images/github-logo-icon.png" className='logoGithub' alt=''></img></a>
                           <a href="https://www.linkedin.com/in/daniel-ceci/" target="_blank" rel="noreferrer"><img src="/images/Linkedin-In-Logo-PNG-Isolated-Image.png" className='logoLinkedinEInsta' alt=''></img></a>
                           <a href="https://www.instagram.com/dani.elceci/" target="_blank" rel="noreferrer"><img src='/images/instagramLogo.png' alt='' className='logoLinkedinEInsta'></img></a>
             </div>
          </div>
    </div>

  )
}

export default Contact