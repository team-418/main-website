import { createStore } from 'redux';
import {USER_INPUT} from '../actions/constants';
import ObjectAssign from 'object-assign';

const initialState = {
    data: 'Sudhakar'
};

function appState(state = initialState, action) {
  switch (action.type) {
        case USER_INPUT:
            return ObjectAssign({}, state, { data: action.userInput });
        default:
            return state;
  }
}

var store = createStore(appState);
export default store;