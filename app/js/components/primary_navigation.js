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
          <Link to="/" className={"navbar-brand"}>PC PrincipalConnect</Link>
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