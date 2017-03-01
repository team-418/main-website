import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

import PrimaryNavigation from './primary_navigation';
import MainFooter from './main_footer';

class ExampleOpportunities extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PrimaryNavigation additionalNavBarClasses={[ "navbar-primary", "navbar-default", "navbar-collapse"]} 
            rightLinks={[
              <Link to="/example_opportunities">Volunteer Opportunities</Link>,
              <a href="#">About Us</a>,
              <Link to="/faqs">FAQs</Link>,
              <Link to="/signup" className={'btn btn-success'}>Sign Up</Link>,
              <Link to="/signup" className={'btn btn-primary'}>Log In</Link>
            ]} />
        <div className={"container"}>
        </div>
        <MainFooter />
      </div>
    );
  }
}

export default ExampleOpportunities;
