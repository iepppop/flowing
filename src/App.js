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


function App() {
  return (
    <RecoilRoot>
      <MenuContent />
      <Header />
      <Home />
      <Footer />
      <AnimatePresence exitBeforeEnter>
      </AnimatePresence>
    </RecoilRoot>
  );
}

export default App;
