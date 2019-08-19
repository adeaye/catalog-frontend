import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import './style.css';
import { unregister } from './registerServiceWorker';
import { Provider } from 'react-redux';
import createStore from './store';
const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
unregister();
