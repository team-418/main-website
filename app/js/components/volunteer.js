import React from 'react';
import { render } from 'react-dom';

class Volunteer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var leftItems = this.props.leftLinks.map(function(item, i) { return <li key={"item" + i}>{item}</li> });
    var rightItems = this.props.rightLinks.map(function(item, i) { return <li key={"item" + i}>{item}</li> });

    return (
      <div>
        <div className={'base-profile'}>

        </div>
      </div>
    );
  }
}

Volunteer.defaultProps = {
  leftLinks: [],
  rightLinks: [],
  additionalNavBarClasses: []
};

export default Volunteer;
