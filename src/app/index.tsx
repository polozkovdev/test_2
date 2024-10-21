import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.scss';
import { StoreProvider } from './providers/StoreProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StoreProvider>
    <App />
  </StoreProvider>,
);
