import { put, takeEvery } from 'redux-saga/effects'
import { GET_INIT_LIST } from "./actionType";
//import { getInitlist } from './actionCreators';

import {
    initListAction,
} from "./actionCreators";

import axios from "axios";

function* getInitlist() {
    try {
        const res = yield axios.get('/list.json');
        const action = initListAction(res.data);
        yield put(action);
    } catch (e) {
        console.log('list.json error');
    }

    /*  axios.get('/list.json').then((res) => {
         const data = res.data;
 
         //store.dispatch(action);
     }) */
    console.log('hello');
}

//genertator 函数
function* mysaga() {
    yield takeEvery(GET_INIT_LIST, getInitlist);
}
export default mysaga;