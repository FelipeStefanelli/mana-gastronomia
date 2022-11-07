import React, { useEffect } from 'react';
import './App.scss';
import Logo from './assets/logo mana.jpg';
import LinkIcon from './assets/link-icon.png';
import InstagramIcon from './assets/instagram-icon.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnimatedRoutes from './componenets/AnimatedRoutes';
import { useNavigate, useLocation } from 'react-router-dom';

function App(props) {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="App">
      {location.pathname !== '/' &&
        <header className="header" >
          <div className="header-logo">
            <img src={Logo} alt="logo" width="102px" height="46px" />
            <div>
              <p>Por Ana Bombonatto</p>
              <p>Gastronomia saudável acessível a todos</p>
            </div>
          </div>
          <ul className="header-links">
            <li><p className={location.pathname === '/' ? 'active' : ''} onClick={() => navigate('/')}>Início</p></li>
            <li><p className={location.pathname === '/home' ? 'active' : ''} onClick={() => navigate('/home')}>Home</p></li>
            <li><p className={location.pathname === '/informacoes-nutricionais' ? 'active' : ''} onClick={() => navigate('/informacoes-nutricionais')}>Informações Nutricionais</p></li>
            {/* <li><a className={location.pathname === '/cardapio' ? 'active' : ''} onClick={() => navigate('/cardapio')}>Cardápio</a></li> */}
            <li><p onClick={() => navigate('/cardapio')}>Mais</p></li>
            <li>
              <a href="https://www.instagram.com/managastronomiasaudavel/?next=%2Fmanagastronomiasaudavel%2F" className='instagram' target="_blank" rel="noopener noreferrer">
                  <span className='instagram'></span>
              </a>
            </li>
            <li>
              <a href="https://anabombonatto.goomer.app/menu" target="_blank" rel="noopener noreferrer" className='goomer'>
                  <span className='goomer'></span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/ManaporAnaBombonatto" target="_blank" rel="noopener noreferrer" className='facebook'>
                  <span className='facebook'></span>
              </a>
            </li>

          </ul>
        </header>
      }
      <React.Suspense fallback={<div className='fallback-container'></div>}>
        <div className={location.pathname === '/' ? 'linktree-body' : 'body'}>
          <AnimatedRoutes />
        </div>
      </React.Suspense>
    </div>
  );
}

export default App;
