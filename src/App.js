import './App.css';
import styled from 'styled-components';
import Main from './components/Home/Main';
import Home from './components/Home/Home';
import Header from './components/Menu/Header';
import {
  RecoilRoot
} from 'recoil';
import Footer from './components/Footer';
import MenuContent from './components/Menu/MenuContent';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Production from './components/production/Production';
import Product from './components/production/Product';
import About from './components/About/About';
import Interior from './components/Interior/Interior';


function App() {
  const location = useLocation();
  return (
    <RecoilRoot>
      <MenuContent />
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/>} />
        <Route path="/production" element={<Production/>} />
        <Route path="/production/:id" element={<Product/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/interior" element={<Interior />} />
        </Routes>
      </AnimatePresence>
      {/* <Footer /> */}
    </RecoilRoot>
  );
}

export default App;
