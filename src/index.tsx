import ReactDOM from 'react-dom/client';
import App from './components/App';
import LoginContextProvider from './context';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
<LoginContextProvider>
  <App />
</LoginContextProvider>
);
