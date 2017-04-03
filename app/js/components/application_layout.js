import React from 'react';
import { render } from 'react-dom';
import PrimaryNavigation from './primary_navigation';
import MainFooter from './main_footer';

class ApplicationLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="site-wrapper">
        <div className="main-content">
          <PrimaryNavigation
            additionalNavBarClasses={this.props.additionalNavBarClasses} 
            leftLinks={this.props.leftLinks} 
            rightLinks={this.props.rightLinks} /> 
          <div className="sidebar-wrapper">
            {this.props.sidebarContent && <div className="sidebar">
              {this.props.sidebarContent}
            </div>}
            <div className="content">
              {this.props.mainBodyContent}
            </div>
          </div>
          <MainFooter />
        </div>
      </div>
    );
  }
}

ApplicationLayout.defaultProps = {
  leftLinks: [],
  rightLinks: [],
  additionalNavBarClasses: ["navbar-primary", "navbar-default", "navbar-collapse"],
  sidebarContent: null,
  mainBodyContent: null
}

export default ApplicationLayout;
