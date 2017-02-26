import React from 'react';
import { render } from 'react-dom';
import about from './components/about';
import { Provider, connect } from 'react-redux';
import { browserHistory, Router, Route} from 'react-router';
import * as actions from './actions/actions';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

handleChange(event) {
         this.props.actions.handleUserInput(this.refs.userInput.value);
  }

  render() {
    return(
      <div>
        <p>Hello User ({this.props.name})!</p>
        <p>Put in your Name below:</p>
        <input type="text" ref="userInput" onChange={()=>this.handleChange()} />
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {      
      name: state.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

MyApp.propTypes = {
    name: React.PropTypes.string,
    actions: React.PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyApp);