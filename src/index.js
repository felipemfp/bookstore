import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router'
import routes from './routes'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

import configureStore from './store/configureStore'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('root')
);
