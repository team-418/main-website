import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

class PrimaryNavigation extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    var leftItems = this.props.leftLinks.map(function(item, i) { return <li key={"item" + i}>{item}</li> });
    var rightItems = this.props.rightLinks.map(function(item, i) { return <li key={"item" + i}>{item}</li> });

    return (
      <nav className={"navbar " + this.props.additionalNavBarClasses.join(" ")} aria-expanded="true">
        <div className="container">
        <div className="navbar-header">
          <button aria-controls="bs-navbar" aria-expanded="true" className="navbar-toggle" data-target="#documentation-navbar" data-toggle="collapse" type="button"> 
            <span className="sr-only">Toggle navigation</span> 
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <Link to="/" className={"navbar-brand"}>
            <svg viewBox="0 0 476.5 247.8" height="5em">
              <text fontFamily="ArialMT" fontSize="60" transform="matrix(1 0 0 1 137.3443 68.3159)">Principals</text>
              <text fontFamily="ArialMT" fontSize="60" transform="matrix(1 0 0 1 137.3443 140.3159)"> Connect</text>
              <text fontFamily="ArialMT" fontSize="24" transform="matrix(1 0 0 1 127.6616 171.2627)">Serving urban school principals</text>
              <g>
                <text fontFamily="ArialMT" fontSize="156.6323" transform="matrix(1 0 0 1 20.6524 160.0859)">C</text>
                <text fontFamily="ArialMT" fontSize="209.4883" transform="matrix(1 0 0 1 -15.3374 150.8305)">P</text>
                <polygon points="129,95.1 99.3,87.9 136.3,64.9  "/>
                <path d="M87.5,59c0,0-1.9-4.9-0.9-7.4c0.8-1.9,5.4-4.5,5.4-4.5s5.9,0.6,10.4,2.7c10.6,4.8,16.1,13.7,16.1,13.7l-1.7,8.8l-8,3.5
                  c0,0-3.9-8.1-9.4-11.6C92.8,59.9,87.5,59,87.5,59z"/>
              </g>
            </svg>
          </Link>
        </div>
        <nav className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            {leftItems}
          </ul>
          <ul className="nav navbar-nav navbar-right">
            {rightItems}
          </ul>
        </nav>
        </div>
      </nav>
    );
  }
}
PrimaryNavigation.defaultProps = {
  leftLinks: [],
  rightLinks: [],
  additionalNavBarClasses: []
};
export default PrimaryNavigation;
