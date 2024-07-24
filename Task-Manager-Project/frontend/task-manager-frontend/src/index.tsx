import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { MantineProvider } from '@mantine/core';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <MantineProvider theme={{ primaryColor: 'blue' }}>
      <App />
    </MantineProvider>
    </BrowserRouter>
    
  </React.StrictMode>
);


