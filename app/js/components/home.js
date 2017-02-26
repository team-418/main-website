import React from 'react';
import { render } from 'react-dom';
import {browserHistory} from 'react-router';

class home extends React.Component{
    constructor(props) {
     super(props);
    }

  render() {
    return (
      <div>
        <p>Home Page!</p>
        <div><button onClick={browserHistory.goBack}>Back</button></div>
      </div>
    );
  }
}

export default home;