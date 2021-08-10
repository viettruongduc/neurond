import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';
import App from './src/templates/blog.js';
const app = express();

app.get('/*', (req, res) => {
  const app = renderToString(<App />);
  const helmet = Helmet.renderStatic();

const html = `
    <!doctype html>
    <html ${helmet.htmlAttributes.toString()}>
        <head>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${helmet.link.toString()}
        </head>
        <body ${helmet.bodyAttributes.toString()}>
            <div id="app">
                ${app}
            </div>
        </body>
    </html>
`;

  res.send(html);
});

app.listen(3000);