import React from 'react';
import { Writable } from 'node:stream';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App.jsx';
import { HeadContext } from './components/HeadContext';

// Renders one route to HTML at build time, waiting for lazy-loaded pages,
// and returns the markup plus the head tags collected by <SEO>.
export function render(url) {
  const head = {};
  return new Promise((resolve, reject) => {
    let html = '';
    const sink = new Writable({
      write(chunk, _encoding, callback) { html += chunk.toString(); callback(); },
      final(callback) { resolve({ html, head }); callback(); }
    });
    const stream = renderToPipeableStream(
      <HeadContext.Provider value={head}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HeadContext.Provider>,
      {
        onAllReady() { stream.pipe(sink); },
        onShellError: reject,
        onError(error) { reject(error); }
      }
    );
    setTimeout(() => reject(new Error(`Render timed out for ${url}`)), 20000).unref();
  });
}
