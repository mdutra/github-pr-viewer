import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Home';
import PullRequestList from './PullRequestList';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/:user/:repo" component={PullRequestList} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
