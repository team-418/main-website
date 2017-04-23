import PrimaryNavigation from './components/primary_navigation';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, IndexRedirect, browserHistory, Link } from 'react-router';
import HtmlToReact from 'html-to-react'

import ApplicationLayout from './components/application_layout';
import AccountRegistrationPage from './styleguide_pages/account_registration_page';

var htmlToReactParser = new HtmlToReact.Parser(React);
var navigationalLinks = htmlToReactParser.parse(document.getElementById('navigational-links').innerHTML);
var sidebarContent = htmlToReactParser.parse(document.getElementById('sidebar-content').innerHTML);

document.getElementById('navigational-links').remove();
document.getElementById('sidebar-content').remove();

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

 render() {
    return (
      <ApplicationLayout 
        leftLinks={[
          <Link to="/styleguide">Home</Link>,
          <Link to="/styleguide/account_registration">Account Information Components</Link>
        ]} 
        rightLinks={[<a href="#">Sign In Fake</a>]} 
        sidebarContent={navigationalLinks}
        mainBodyContent={sidebarContent} />
    );
  }
}

render (
  <Router history={browserHistory}>
    <Route path="/styleguide">
      <IndexRoute component={HomePage} />
      <Route path="account_registration" component={AccountRegistrationPage} />
    </Route>
  </Router>,
  document.getElementById('root')
);
