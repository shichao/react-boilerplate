import { setupWorker } from 'msw';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './app';
import { handlers } from './services/mock';

const worker = setupWorker(...handlers);

worker.start();

ReactDOM.render(<App />, document.getElementById('app'));

//for hot load
//https://github.com/gaearon/react-hot-loader/blob/master/docs/Troubleshooting.md
const anyModule = module as any;
if (anyModule.hot) {
  anyModule.hot.accept();
}
