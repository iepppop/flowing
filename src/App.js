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
        </Routes>
      </AnimatePresence>
      {/* <Footer /> */}
    </RecoilRoot>
  );
}

export default App;
