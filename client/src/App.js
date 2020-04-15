
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import Box from './component/Box';
import FromAdd from './container/FromAdd';
import Detail_product from './component/Detail_product'

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Box} />
        <Route path="/add" component={FromAdd} />
        <Route path="/detail" component={Detail_product} />
      </Switch>
    </Router>
  )
}