import React from 'react';
import { render } from 'react-dom';
import {Link} from 'react-router';

class MainFooter extends React.Component {
  render() {
    return (
      <footer className={'main-footer'}>
        <div className={'col-md-4'}>
          <h1 className={'primary-text'}>PrincipalsConnect</h1>
          <p>Recruits, trains, and supports retired professionals who volunteer with principals of urban schools.</p>
        </div>
        <div className={'col-md-4'}>
          <nav>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Volunteer Opportunities</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </nav>
        </div>
        <div className={'col-md-4'}>
          <h2>Connect With Us</h2>
          <p>
            <iframe 
              src={"https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Fprincipalsconnect.com%2F&layout=button&size=large&mobile_iframe=true&appId=279832205458880&width=73&height=28"} 
              width={"73"}
              height={"28"} 
              style={{border:'none', overflow:'hidden'}}
              scrolling={"no"}
              frameBorder={"0"}
              allowTransparency={"true"}>
            </iframe>
          </p>

        </div>
      </footer>
    )
  }
}

export default MainFooter;
