import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app';

let reactRoot = document.getElementById('app');
if (reactRoot) {
  ReactDOM.render(<App />, reactRoot);
}
