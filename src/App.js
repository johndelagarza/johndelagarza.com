import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import Welcome from './sections/Welcome';
import Projects from './sections/Projects';

function App(props) {
  return (
    <div>
      <Router>
        <NavBar />
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="*" component={() => "404 NOT FOUND"} /> 
          </Switch>
        </Router>
    </div> 
  )
};

export default App;
