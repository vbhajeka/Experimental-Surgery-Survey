import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Route exact path='/' component={App} />
      <section>
        <Switch>
          <Route exact path='/start' render={() => <App comp='start' />} />
          <Route exact path='/confirm' render={() => <App comp='confirm' />} />
        </Switch>
      </section>
    </Provider>
  </Router>,
  document.getElementById('root')
);