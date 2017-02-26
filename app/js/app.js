import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import About from './components/about';
import Home from './components/home';
import MyApp from './my_app';
import { Provider } from 'react-redux';
import RouteComponent from './components/routes';
import axios from 'axios';

import  store from './reducer/appState'
render(
    <Provider store={store}>
        <RouteComponent/>
    </Provider>, document.getElementById('root')
);
