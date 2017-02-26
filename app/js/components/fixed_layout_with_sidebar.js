import React from 'react';
import { render } from 'react-dom';
import PrimaryNavigation from './primary_navigation';

class FixedLayoutWithSidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PrimaryNavigation
          additionalNavBarClasses={["navbar-primary", "navbar-default", "navbar-collapse", "navbar-fixed-top"]} 
          leftLinks={[this.props.leftLinks]} rightLinks={[this.props.rightLinks]} />  
        <div className="sidebar">
          {this.props.sidebarContent}
        </div>
        <div className="body-with-sidebar">
          {this.props.mainBodyContent}
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
