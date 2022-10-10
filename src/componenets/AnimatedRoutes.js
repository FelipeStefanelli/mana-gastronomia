import React from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home';
import NutriInfo from '../pages/NutriInfo';
import Cardapio from '../pages/Cardapio';
import Team from '../pages/Team';
import AboutUs from '../pages/AboutUs';
import Gallery from '../pages/Home';
import Menu from '../pages/Menu';

// const Home = React.lazy(() => import('../pages/Home'));
// const NutriInfo = React.lazy(() => import('../pages/NutriInfo'));
// const Cardapio = React.lazy(() => import('../pages/Cardapio'));
// const Team = React.lazy(() => import('../pages/Team'));
// const AboutUs = React.lazy(() => import('../pages/AboutUs'));
// const Gallery = React.lazy(() => import('../pages/Gallery'));

function AnimatedComponents() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route
          path='/'
          exact={true}
          element={<Menu location={location} navigate={navigate} />}
        />
        <Route
          path='/home'
          exact={true}
          element={<Home location={location} navigate={navigate} />}
        />
        <Route
          path='/informacoes-nutricionais'
          element={<NutriInfo location={location} navigate={navigate} />}
        />
        <Route
          path='/cardapio'
          element={<Cardapio location={location} navigate={navigate} />}
        />
        <Route
          path='/equipe'
          element={<Team location={location} navigate={navigate} />}
        />
        <Route
          path='/sobre'
          element={<AboutUs location={location} navigate={navigate} />}
        />
        <Route
          path='/galeria'
          element={<Gallery location={location} navigate={navigate} />}
        />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedComponents;
