import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router'; 

import ApplicationLayout from './application_layout';
import AccountRegistration from './registration/account_registration';
import Availability from './registration/availability';
import Skills from './registration/skills';

const FormFlow = ['AccountRegistration', 'Skills', 'Availability']

const FormMappings = {
  'AccountRegistration': AccountRegistration,
  'Skills': Skills,
  'Availability': Availability
}

class SignUp extends React.Component{
  constructor(props) {
    super(props);

    this.getCurrentForm = this.getCurrentForm.bind(this);
    let CurrentFormKey = FormMappings[FormFlow[0]];

    this.state = {
      formData: {},
      currentFormKey: 'AccountRegistration',
      currentForm: <CurrentFormKey ref={(form) => {this.currentForm = form}} formSubmit={this.getCurrentForm} />
    }
  }

  getCurrentForm(e) {
    e.preventDefault();

    let newFormData = Object.assign({}, this.state.formData, this.currentForm.getFormData());
    let formIndex = FormFlow.indexOf(this.state.currentFormKey);
    let currentFormKey = this.state.currentFormKey;
    let currentForm = this.state.currentForm;

    if (formIndex < FormFlow.length - 1) {
      currentFormKey = FormFlow[formIndex + 1];

      let NextForm = FormMappings[currentFormKey];
      currentForm = <NextForm ref={(form) => {this.currentForm = form}} formSubmit={this.getCurrentForm} />;
    }

    this.setState({
      ...this.state,
      formData: newFormData,
      currentFormKey,
      currentForm
    })
  }

  renderSignupContent() {
    return this.state.currentForm;
  }

  render() {
    return (
      <ApplicationLayout 
        additionalNavBarClasses={["navbar-primary", "navbar-default", "navbar-collapse", "navbar-admin-panel"]}
        rightLinks={[
          <Link to="/example_opportunities">Volunteer Opportunities</Link>,
          <a href="#">About Us</a>,
          <Link to="/faqs">FAQs</Link>,
          <Link to="/signup" className={'btn btn-success'}>Sign Up</Link>,
          <Link to="/signup" className={'btn btn-primary'}>Log In</Link>
        ]} 
        mainBodyContent={ this.renderSignupContent() } />
    );
  }
}

export default SignUp;
