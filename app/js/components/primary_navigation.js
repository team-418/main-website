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
            <svg viewBox="0 0 476.5 247.8" height="4em">
              <text fontFamily="ArialMT" fontSize="60" fill="#FFFFFF" transform="matrix(1 0 0 1 152.6816 97.2588)">Principals</text>
              <text fontFamily="ArialMT" fontSize="60" fill="#FFFFFF" transform="matrix(1 0 0 1 152.6816 169.2588)"> Connect</text>
              <text fontFamily="ArialMT" fontSize="24" fill="#FFFFFF" transform="matrix(1 0 0 1 142.9989 200.2056)">Serving urban school principals</text>
              <g>
                <text fontFamily="ArialMT" fontSize="156.6323" fill="#FFFFFF" transform="matrix(1 0 0 1 35.9897 189.0288)">C</text>
                <text fontFamily="ArialMT" fontSize="209.4883" fill="#FFFFFF" transform="matrix(1 0 0 1 -6.103516e-05 179.7734)">P</text>
                <polyline fill="#FFFFFF" fontFamily="ArialMT" points="144.3,124 114.6,116.8 151.7,93.9 "/>
                <path fill="#FFFFFF" d="M102.8,87.9c0,0-1.9-4.9-0.9-7.4c0.8-1.9,5.4-4.5,5.4-4.5s5.9,0.6,10.4,2.7c10.6,4.8,16.1,13.7,16.1,13.7
                  l-1.7,8.8l-8,3.5c0,0-3.9-8.1-9.4-11.6C108.2,88.9,102.8,87.9,102.8,87.9z"/>
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
