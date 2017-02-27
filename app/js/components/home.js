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

      // resource create
    axios({
        method: 'post',
        url: 'api/institutions.json',
        headers: { "X-CSRF-Token": $('meta[name="csrf-token"]').attr('content') },
        data: { 'institution': { 'institution_name': '418' } }
    }).then(function (res) {
        console.log(res);
    }).catch(function (error) {
        console.log(error);
    });

      // resource get
    axios.get('api/institutions/2.json')
        .then(function (res) {
            console.log(res);
        })
        .catch(function (error) {
            console.log(error);
        });

      // user signin
      axios({
          method: 'post',
          url: 'api/users.json',
          headers: { 'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content') },
          data: { 'user': {
              'email': 'testing@email.com',
              'password': 'password',
              'password_confirmation': 'password',
              'user_name': 'test user'
          }}
      }).then(function (res) {
          console.log(res);
      }).catch(function (error) {
          console.log(error);
      });
  }

  render() {
    return (
   <div>
    <div className="site-banner">
        <div className="site-banner-header">
            <PrimaryNavigation additionalNavBarClasses={[ "navbar-primary", "navbar-default", "navbar-collapse"]} 
            rightLinks={[
              <Link to="/example_opportunities">Volunteer Opportunities</Link>,
              <Link to="/about">About Us</Link>,
              <Link to="/faqs">FAQs</Link>,
              <Link to="/signup" className={'btn btn-success'}>Sign Up</Link>,
              <Link to="/signup" className={'btn btn-primary'}>Log In</Link>
            ]} />
                <div className="container">
                    <div className="site-banner-content">
                        <div className="site-banner-onboarding text-center">
                            <h1 className="full-width-max">Connecting urban school principals with retired professionals.</h1>
                            <p className="question">Volunteering as a Advisor?</p>
                            <a className="listings">View Opportunities Near You</a>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    <section className="registration-onboarding brand-dark">
        <div className="container">
            <h2>Sign up to start connecting</h2>
            <div className="signup">
                <h2>I am a</h2>
                <Link to="/signup"><button className="btn btn-success btn-lg">Volunteer &gt;</button></Link>
                <button className="btn btn-success btn-lg">Principal &gt;</button>
            </div>
        </div>
    </section>
    <section className="goals text-center">
        <div className="container">
            <h2 className="full-width-max">Our goal at PrincipalsConnect is to help connect urban school principals with retired professionals</h2>
            <p className="full-width-max">When retired business leaders help urban principals with professional services, principals can spend more time on education and teachers and students will thrive.</p>
            <div className="col-md-4">
                <img className="illustration" src="/assets/principals.png" />
                <h4>Why urban principals?</h4>
                <p>They are the most important determinant in a school’s success. Gifted principals attract great teachers and resources that result in high performing students.</p>
            </div>
            <div className="col-md-4">
                <img className="illustration" src="/assets/adviser.png" />
                <h4>Why retired professionals?</h4>
                <p>Retired leaders crave working with a team on strategic, complex projects…but don’t want to be tethered to a schedule.</p>
            </div>
            <div className="col-md-4">
                <img className="illustration" src="/assets/school.png" />
                <h4>Why PrincipalsConnect?</h4>
                <p>Our web site allows retirees to have flexibility in the hours they volunteer and gives principals the ability to select PC Advisers when and where they need them.</p>
            </div>
        </div>
    </section>
    <section className="stat brand-main serif">
        <div className="container">
            <div className="col-md-6 main-color serif">
                <p>Potential fact or statistic about the concept of PrincipalsConnect or about the cause it serves could go here.</p>
            </div>
            <div className="col-md-6 main-color serif">
                <img src="" className="principal" />
            </div>
        </div>
    </section>
    <MainFooter />
</div>

    );
  }
}

export default home;
