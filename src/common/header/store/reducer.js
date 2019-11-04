import * as constants from './constans';

import { fromJS } from "immutable";

const defaultState = fromJS({
    focused: false,
    list: []
});

export default (state = defaultState, action) => {

    //immutable对象的set方法，会结合之前的immutable对象的值和设置的值，返回一个全新的对象
    if (action.type === constants.SEARCH_FOCUS) {
        return state.set('focused', true);
    }
    if (action.type === constants.SEARCH_BLUR) {
        return state.set('focused', false);
    }
    if (action.type === constants.CHANGE_LIST) {
        console.log('test')
        console.log('action.data', action.data);
        return state.set('list', action.data);
    }
    return state;
}