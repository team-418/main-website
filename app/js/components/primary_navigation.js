import React from 'react';
import { render } from 'react-dom';
class PrimaryNavigation extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    var leftItems = this.props.leftLinks.map(function(item, i) { return <li key={"item" + i}>{item}</li> });
    var rightItems = this.props.rightLinks.map(function(item, i) { return <li key={"item" + i}>{item}</li> });
    var rightItems2 = this.props.rightLinks2.map(function(item, i) { return <li key={"item" + i}>{item}</li> });
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
          <a href="../" className="navbar-brand">PC PrincipalConnect</a>
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