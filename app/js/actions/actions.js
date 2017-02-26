import * as types from './constants';

export function handleUserInput(userInput) {
    return {
        type: types.USER_INPUT, userInput
    };
}