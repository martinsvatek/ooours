import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './index.module.scss';
import { reportWebVitals } from './reportWebVitals';
import { register } from './serviceWorkerRegistration';

const root = createRoot(document.getElementById('root') as Element | DocumentFragment);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

register();

reportWebVitals(console.log);
