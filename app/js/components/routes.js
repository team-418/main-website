import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import MyApp from '../my_app';
import Home from './home';
import About from './about';
import Signup from './signup';
import Faqs from './faqs';
import ExampleOpportunities from './example_opportunities'
import SidebarView from './sidebar_view'

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
            <Route path='/faqs' component={Faqs}/>
            <Route path='/example_opportunities' component={ExampleOpportunities}/>
        </Router>
    );
  }
}

export default routes;
