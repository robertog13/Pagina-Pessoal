import React from 'react';
import Header from '../../Componentes/Header/Header';
import Footer from '../../Componentes/Footer/Footer';
import "./MainPage.css"
import pc from '../../images/pc.jpg';
import reactIcon from '../../images/react-icon.png';
import reduxIcon from '../../images/redux-icon.png';
import programingIcon from '../../images/programing-icon.png';
import robertoPicture from '../../images/roberto.jpg'


function MainPage() {
  return (
    <>
      <Header />
      <div className='main-content'>
        <section className='first-section'>
          <div className='titles'>
            <h1>Desenvolvedor Web</h1>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sunt eum fugit quasi quo, laboriosam doloremque doloribus eaque reiciendis facilis ipsum aliquid labore nesciunt nostrum eveniet necessitatibus quae corrupti! Laudantium.</h2>
          </div>
          <img className='pcImage' src={ pc } alt="Programin" />
        </section>
        <section className='second-section'>
          <h2>Tecnologias</h2>
          <div className='cards-section'>
            <div className='card'>
              <img className='programingIcon' src={ programingIcon } alt="" />
              <h3>HTML, CSS, JavaScript</h3>
              <p>O desenvolvimento Frontend da web é o desenvolvimento da interface gráfica do usuário de um site, por meio do uso de HTML, CSS e JavaScript, para que os usuários possam visualizar e interagir com aquele site.</p>
            </div>
            <div className='card'>
              <img className='reactIcon' src={ reactIcon } alt="React Icon"/>
              <h3>React</h3>
              <p>Biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.</p>
            </div>
            <div className='card'>
              <img className='reduxIcon' src={ reduxIcon } alt="" />
              <h3>Redux & ContextAPI</h3>
              <p>Uma biblioteca JavaScript de código aberto para gerenciar o estado do aplicativo. É mais comumente usado com bibliotecas como React ou Angular para criar interfaces de usuário.</p>
            </div>
          </div>
        </section>
        <section className='third-section'>
          <h2>Desenvolvimento</h2>
          <div>
            <p> Me chamo Roberto Gonçalves, tenho 23 anos, formado em Adiministração de Empresas e um eterno estudante da área de tecnologia. Comecei meus estudos de Desenvolvimento Web na Trybe no início de 2022, mas o convívio com computadores ocorreu desde cedo. De certa forma esse foi um dos fatores que despertou minha curiosade e buscar aprimorar meus conhecimentos na área . <br/> Na Trybe pude melhorar tanto minhas habilidades de programação quanto de Softskill para uma melhor ineração com o mercado de trabalho. Tais habilidades foram gradualmente desenvolvidas através de palestras , projetos em grupos e conversas com toda a equipe da Trybe.</p>
            <img className='robertoPicture' src={ robertoPicture } alt="Roberto Gonçalves" />
          </div>
        </section>
      </div>
      <Footer />
      
    </>
  );
}

export default MainPage;