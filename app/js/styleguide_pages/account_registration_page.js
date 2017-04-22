import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import HtmlToReact from 'html-to-react';
import Codeblock from 'react-uikit-codeblock';

import ApplicationLayout from '../components/application_layout';
import AccountRegistration from '../components/registration/account_registration';
import Availability from '../components/registration/availability';
import Skills from '../components/registration/skills';

class AccountRegistrationPage extends React.Component {
  render() {
    return (
      <ApplicationLayout 
        header="Account Registration"
        leftLinks={[
          <Link to="/styleguide">Home</Link>,
          <Link to="/styleguide/account_registration">Account Information Components</Link>
        ]} 
        rightLinks={[<a href="#">Sign In Fake</a>]} 
        sidebarContent={
          <nav>
            <ul>
              <li><a href="#account-registration">Account Registration</a></li>
              <li><a href="#availability">Availability</a></li>
              <li><a href="#skills">Skills</a></li>
            </ul>
          </nav>
        }
        mainBodyContent={
          <div>
            <h1 id="account-registration">Account Registration Form</h1>
            <hr />
            <AccountRegistration />
            <Codeblock>
              {`<AccountRegistration />`}
            </Codeblock>
            <h1 id="availability">Availability Form</h1>
            <hr />
            <Availability />
            <Codeblock>
              {`<Availability />`}
            </Codeblock>
            <h1 id="skills">Skills Form</h1>
            <hr />
            <Skills />
            <Codeblock>
              {`<Skills />`}
            </Codeblock>
          </div>
        } />
    )
  }
}

export default AccountRegistrationPage;
