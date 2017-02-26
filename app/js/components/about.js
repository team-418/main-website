import React from 'react';
import { render } from 'react-dom';
import {Link} from 'react-router';
import PrimaryNavigation from './primary_navigation';

class about extends React.Component{
    constructor(props) {
     super(props);
    }

  render() {
    return (
      <div>
        <PrimaryNavigation leftLinks={[<Link to="/about">About Us</Link>]} rightLinks={[<a>Login</a>]} />
        <p>About!</p>
      </div>
    );
  }
}

export default about;