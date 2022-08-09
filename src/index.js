import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { MouseContextProvider } from '../src/components/useMousePosition';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MouseContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MouseContextProvider>
  </React.StrictMode>
);
