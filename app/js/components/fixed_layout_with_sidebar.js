import React from 'react';
import { render } from 'react-dom';
import PrimaryNavigation from './primary_navigation';
import MainFooter from './main_footer';

class FixedLayoutWithSidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="site-wrapper">
        <div className="main-content">
          <PrimaryNavigation
            additionalNavBarClasses={["navbar-primary", "navbar-default", "navbar-collapse", "navbar-admin-panel"]} 
            leftLinks={[this.props.leftLinks]} rightLinks={[this.props.rightLinks]} /> 
          <div className="sidebar-wrapper">
            <div className="sidebar-wrapper">
              <div className="sidebar">
                {this.props.sidebarContent}
              </div>
              <div className="content">
                {this.props.mainBodyContent}
              </div>
            </div>
          </div> 
          <MainFooter />
        </div>
      </div>
    );
  }
}

FixedLayoutWithSidebar.defaultProps = {
  leftLinks: [],
  rightLinks: [],
  sidebarContent: null,
  mainBodyContent: null
}

export default FixedLayoutWithSidebar;
