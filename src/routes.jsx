import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Article from './components/article';

import Blog from './containers/blog';
import Projects from './containers/project';
import About from './containers/about';

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Blog} />
          <Route path='/blog/:slug' component={Article} />
          <Route path='/projects' component={Projects} />
          <Route path='/about' component={About} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
