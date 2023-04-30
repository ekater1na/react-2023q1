import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import App from './App';
import { StaticRouter } from 'react-router-dom/server';
import './index.scss';
import { Provider } from 'react-redux';
import { initStore, RootState } from './store/store';
import { preloadData } from './server/preloadData';

const store = initStore();

export const render = async (url: string) => {
  await preloadData(store);

  const preloadStore: RootState = { ...store.getState() };

  renderToPipeableStream(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </Provider>
    </React.StrictMode>,
    {
      bootstrapScriptContent: `window.__PRELOADED_STATE__ = ${JSON.stringify(preloadStore)}`,
      bootstrapModules: ['./src/entry-client.tsx'],
    }
  );
};
