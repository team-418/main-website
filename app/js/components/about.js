import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import FixedLayoutWithSidebar from './fixed_layout_with_sidebar';

class about extends React.Component{
    constructor(props) {
     super(props);
    }

  render() {
    return (
      <div>
        <FixedLayoutWithSidebar 
          leftLinks={[<a href="#">Elements</a>]} 
          rightLinks={[<a href="#">Sign In Fake</a>]} 
          mainBodyContent={ <p>Hello!</p>}
          sidebarContent={ <h3>This is sidebar!</h3>}/>
      </div>
    );
  }
}

export default about;
