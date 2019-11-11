import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PullRequestList from './PullRequestList';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/:user/:repo" component={PullRequestList} />
      </Switch>
    </Router>
  );
}

export default App;
