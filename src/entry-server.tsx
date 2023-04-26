import React from 'react';
import { renderToPipeableStream, RenderToPipeableStreamOptions } from 'react-dom/server';
import App from './App';
import { StaticRouter } from 'react-router-dom/server';
import './index.scss';
import { Provider } from 'react-redux';
import { store } from './store/store';

export const render = (url: string, context: RenderToPipeableStreamOptions) => {
  return renderToPipeableStream(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </Provider>
    </React.StrictMode>,
    context
  );
};
