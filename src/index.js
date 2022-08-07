import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { MouseContextProvider } from '../src/components/useMousePosition';
import CustomCursor from '../src/components/CustomCurosr';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MouseContextProvider>
      <BrowserRouter>
        <CustomCursor />
        <App />
      </BrowserRouter>
    </MouseContextProvider>
  </React.StrictMode>
);
