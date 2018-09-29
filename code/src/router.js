import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Home from './routes/Home';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/doc" exact component={IndexPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
