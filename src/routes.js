import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Home from './pages/Home';
import Pessoas from './pages/Pessoas';
import PessoasNew from './pages/Pessoas/New';

//import Template from './components/Template';

function Routes() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/pessoas">
            <Pessoas />
          </Route>
          <Route exact path="/pessoas/new">
            <PessoasNew />
          </Route>
        </Switch>
    </Router>
  );
}

export default Routes;
