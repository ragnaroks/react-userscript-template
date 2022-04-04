import React from 'react';
import ReactDOM from 'react-dom';
import Entry from './Entry';

const document = window.self.document;

const container = document.createElement('div');
container.id = 'ucc';
document.body.appendChild(container);

ReactDOM.render(
  <React.StrictMode>
    <Entry />
  </React.StrictMode>,
  container
);
