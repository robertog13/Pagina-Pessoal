import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

function Header() {
  return (
    <div className='header'>
      <div className='header-title'>
        <p>Roberto Gonçalves</p>
      </div>
      <nav className='navbar'>
        <Link className='link' to="/about">
          <p>Sobre</p>
        </Link>
        <Link className='link' to="/projects">
          <p>Projetos</p>
        </Link>
        <Link className='link' to="">
          <p>Contato</p>
          </Link>
      </nav>
    </div>  

  );
}

export default Header;