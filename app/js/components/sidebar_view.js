import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

import PrimaryNavigation from './primary_navigation';
import MainFooter from './main_footer';

class SidebarView extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    // var leftItems = this.props.leftLinks.map(function(item, i) { return <li key={"item" + i}>{item}</li> });
    // var rightItems = this.props.rightLinks.map(function(item, i) { return <li key={"item" + i}>{item}</li> });

    return (
      <div className="site-wrapper">
        <div className="main-content">
          <PrimaryNavigation additionalNavBarClasses={[ "navbar-primary", "navbar-default", "navbar-collapse", "navbar-admin-panel"]} 
            rightLinks={[
              <Link to="/example_opportunities">Volunteer Opportunities</Link>,
              <a href="#">About Us</a>,
              <Link to="/faqs">FAQs</Link>,
              <Link to="/signup" className={'btn btn-success'}>Sign Up</Link>,
              <Link to="/signup" className={'btn btn-primary'}>Log In</Link>
            ]} />
          <div className="sidebar-wrapper">
            <div className="sidebar">
            </div>
            <div className="content">
            </div>
          </div>
        </div>
        <MainFooter />
      </div>
    );
  }
}
PrimaryNavigation.defaultProps = {
  leftLinks: [],
  rightLinks: [],
  additionalNavBarClasses: []
};
export default SidebarView;
