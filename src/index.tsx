import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import LoginContextProvider from './context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
<LoginContextProvider>
  <App />
</LoginContextProvider>
);
