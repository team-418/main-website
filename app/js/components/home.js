import React from 'react';
import { render } from 'react-dom';
import {Link} from 'react-router';

class home extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="site-banner">
          <div className="site-banner-header">
            <nav className="navbar navbar-primary navbar-default navbar-collapse" aria-expanded="true">
              <div className="container">
                <div className="navbar-header"> 
                  <button aria-controls="bs-navbar" aria-expanded="true" className="navbar-toggle" data-target="#documentation-navbar" data-toggle="collapse" type="button"> 
                    <span className="sr-only">Toggle navigation</span> 
                    <span className="icon-bar" /> 
                    <span className="icon-bar" /> 
                    <span className="icon-bar" /> 
                  </button> 
                  <a href="../" className="navbar-brand">PC PrincipalConnect</a> 
                </div>
                <nav className="navbar-collapse collapse">
                  <ul className="nav navbar-nav">        
                    <li><Link to="/about">About Us</Link></li>
                  </ul>
                  <ul className="nav navbar-nav navbar-right">        
                    <li><a>Login</a></li>
                  </ul>
                </nav>
              </div>
            </nav>
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