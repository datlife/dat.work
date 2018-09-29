import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Blog from './containers/blog';
import Projects from './containers/project';
import About from './containers/about';

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Blog} />
          <Route path='/projects' component={Projects} />
          <Route path='/about' component={About} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
