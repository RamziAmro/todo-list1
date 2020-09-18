import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from './store/reducer'

const store = createStore(reducer, compose(window.devToolsExtension ? window.devToolsExtension() : f => f));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
