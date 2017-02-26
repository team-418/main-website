import React from 'react';
import { render } from 'react-dom';
import {Link} from 'react-router';
import PrimaryNavigation from './primary_navigation';

class home extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="site-banner">
          <div className="site-banner-header">
            <PrimaryNavigation additionalNavBarClasses={["navbar-primary", "navbar-default", "navbar-collapse"]} leftLinks={[<Link to="/about">About Us</Link>]} rightLinks={[<a>Login</a>]} />
          </div>
          <div className="site-banner-content">
            <div className="container">
              <div className="site-banner-onboarding">
                <p>Our mission is to deliver a site in 24 hours (and also eat the cookies!!)</p>
                <p>
                  <button className="btn btn-primary">Explore Opportunities</button>&nbsp;
                  <button className="btn btn-success">Sign Up Today!</button>
                </p>
              </div>
            </div>
          </div>
        </div>
        <section className="registration-onboarding">
          <p>I am</p>
          <p>
            <button className="btn btn-success btn-lg">Volunteer &gt;</button>&nbsp;
            <button className="btn btn-success btn-lg">Principal &gt;</button>
          </p>
          <p><a>View Opportunity Listings</a></p>
        </section>
      </div>
    );
  }
}

export default home;