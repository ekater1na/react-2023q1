import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import { Provider } from 'react-redux';
import { initStore } from './store/store';

const container = document.getElementById('root');

const store = initStore(window.__PRELOADED_STATE__ ?? undefined);
const FullApp = () => (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

if (import.meta.hot || !container?.innerText) {
  const root = createRoot(container!);
  root.render(<FullApp />);
} else {
  hydrateRoot(container!, <FullApp />);
}
