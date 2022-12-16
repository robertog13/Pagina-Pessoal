import React from 'react';
import './Footer.css'
import githubIcon from '../../images/githubIcon.png'
import linkedinIcon from '../../images/linkedinIcon.png'
import emailIcon from '../../images/emailIcon.png'

function Footer() {
  return (
    <div className='footer'>
      <div className='socialContact'>
        <p>Contato:</p>
        <div className='links'>
          <div className='cardLink'>
            <a href="https://www.linkedin.com/in/devroberto-goncalves/" target="_blank" rel="noreferrer">
              <img src={ linkedinIcon } alt="Linkedin" />
            </a>
          </div>
          <div className='cardLink'>
            <a href="https://github.com/robertog13">
              <img src={ githubIcon } alt="GitHub" />
            </a>
          </div>
          <div className='cardLink'>
            <img src={ emailIcon } alt="Email" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;