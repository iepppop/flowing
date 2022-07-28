import './App.css';
import styled from 'styled-components';
import Main from './components/Home/Main';
import Home from './components/Home/Home';
import Header from './components/Menu/Header';
import {
  RecoilRoot
} from 'recoil';


function App() {
  return (
    <RecoilRoot>
    <Header />
     <Home />
     </RecoilRoot>
  );
}

export default App;
