import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import MyApp from '../my_app';
import Home from './home';
import About from './about';
import Signup from './signup';

class routes extends React.Component{
    constructor(props) {
     super(props); 
    }

 render() {
    return (
        <Router history={browserHistory}>
            <Route path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/signup' component={Signup}/>
        </Router>
    );
  }
}

export default routes;