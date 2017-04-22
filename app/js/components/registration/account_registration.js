import React from 'react';
import { render } from 'react-dom';

class AccountRegistration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formInformation: {}
    }

    this.switchAccountType = this.switchAccountType.bind(this);
  }

  switchAccountType(e) {
    this.setState({
      ... this.state,
      formInformation: {
        ... this.state.formInformation,
        accountType: e.target.value
      }
    });
  }

  getFormData() {
    return this.state.formInformation;
  }

  render() {
    return (
      <form className="signup-form" onSubmit={this.props.formSubmit}>
        <h1>Sign Up to Connect</h1>
        
        <div className="main-form-container">
          <div className="account-type col-md-offset-2 col-md-4">
            <p>Choose Account Type</p>
            <div className="account-types">
              <div className="account-type-input">
                <svg height="8em" viewBox="0 0 90.4 111.8" onClick={() => this.switchAccountType({target: {value: 'principal'}})}>
                  <g>
                    <circle fill='none' stroke='#2A5762' strokeWidth='2' strokeMiterLimit='10' cx="47.4" cy="25.7" r="24.7"/>
                    <path fill='none' stroke='#2A5762' strokeMiterLimit='10' d="M0.7,109.8c0,0,15.2-45,28-52.1c6.7-3.7,30.9-3.9,37.5,0c12,7.1,23.6,52.2,23.6,52.2L0.7,109.8z"/>
                    <path fill='none' stroke='#2A5762' strokeWidth='2' strokeMiterLimit='10' d="M39.6,58.3c0,0,6.4-1.1,8.6-1.1c2.1,0,8.3,1.1,8.3,1.1L52,70.5h-8.5L39.6,58.3z"/>
                    <polygon fill='none' stroke='#2A5762' strokeWidth='2' strokeMiterLimit='10' points="43.3,74.7 51.8,74.7 58.9,110.8 35.9,110.8  "/>
                  </g>
                </svg>
                <label>
                  <input type="radio" name="account_type" value="principal" onClick={this.switchAccountType} checked={this.state.formInformation.accountType == 'principal'} />
                  &nbsp;Principal
                </label>
              </div>
              <span className="or-indicator">or</span>
              <div className="account-type-input">
                <svg height="8em" viewBox="0 0 90.4 110.5" fill="none" onClick={() => this.switchAccountType({target: {value: 'volunteer'}})}>
                  <g>
                    <circle stroke="#2A5762" strokeWidth="2" strokeMiterlimit="10" cx="47.4" cy="25.7" r="24.7"/>
                    <path stroke="#2A5762" strokeMiterlimit="10" d="M0.7,109.8c0,0,15.2-45,28-52.1c6.7-3.7,30.9-3.9,37.5,0c12,7.1,23.6,52.2,23.6,52.2L0.7,109.8z"/>
                    <line stroke="#2A5762" strokeWidth="4" strokeMiterlimit="10" x1="45.4" y1="54.9" x2="45.4" y2="109.9"/>
                    <circle stroke="#2A5762" strokeMiterlimit="10" cx="52.3" cy="65.2" r="3.2"/>
                    <circle stroke="#2A5762" strokeMiterlimit="10" cx="52.3" cy="79.2" r="3.2"/>
                    <circle stroke="#2A5762" strokeMiterlimit="10" cx="52.3" cy="93.2" r="3.2"/>
                  </g>
                </svg>
                <label onClick={this.switchAccountType}>
                  <input type="radio" name="account_type" value="volunteer" onClick={this.switchAccountType} checked={this.state.formInformation.accountType == 'volunteer'} />
                  &nbsp;Volunteer
                </label>
              </div>
            </div>
          </div>
          <div className="account-information col-md-4">
            <p className="form-group">
              <input type="text" className="form-control" name="email" placeholder="Email Address" />
            </p>
            <p className="form-group">
              <input type="password" className="form-control" name="password" placeholder="Password" />
            </p>
            <p className="form-group">
              <input type="password" className="form-control" name="password" placeholder="Confirmation" />
            </p>
            <p className="form-group">
              <input type="submit" value="submit" className="btn btn-primary form-control" />
            </p>
          </div>
        </div>
      </form>
    );
  }
}

export default AccountRegistration;
