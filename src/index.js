// index.js
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './components/App'; // Your main App component


const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

