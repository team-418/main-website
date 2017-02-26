import React from 'react';
import { render } from 'react-dom';
import {Link} from 'react-router';
import axios from 'axios';

import PrimaryNavigation from './primary_navigation';
import MainFooter from './main_footer';

class home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var _this = this;

    axios.get('http://localhost:3000/institutions/1.json')
      .then(function (response) {
        _this.setState({institution: response.data});
      })
      .catch(function (error) {
        console.log(error);
      });
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
          <p>{ this.state ? this.state.institution.institution_name : 'No Institution' }</p>
        </section>
        <MainFooter />
      </div>
    );
  }
}

export default home;