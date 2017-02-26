import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import MyApp from '../my_app';
import Home from './home';
import About from './about';

class routes extends React.Component{
    constructor(props) {
     super(props);
    }

  render() {
    return (
        <Router history={browserHistory}>
            <Route path='/' component={MyApp}/>
            <Route path='/about' component={About}/>
            <Route path='/home' component={Home}/>
        </Router>
    );
  }
}

export default routes;
