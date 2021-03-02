import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import Header from './Header'
import HomePage from './HomePage'
import Resume from './Resume'
import Projects from './Projects'
// import './App.css';

const App = () => (
  <div className="center w85">
    <Router>
      <Header />
      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path="/portfolio" component={HomePage} />
          <Route exact path="/portfolio/resume" component={Resume} />
          <Route exact path="/portfolio/projects" component={Projects} />

        </Switch>
      </div>
    </Router>
  </div>
)

export default App
