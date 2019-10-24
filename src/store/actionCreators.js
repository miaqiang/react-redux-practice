import {
    CHANGE_INPUT_VALUE,
    ADD_TOTO_ITEM,
    DELETE_TODO_ITEM,
    INIT_LIST_ACTION,
    GET_INIT_LIST
} from "./actionType";
import axios from "axios";
// import store from '../store';

/* 
中间件指的是action和store的中间，所以他指的是redux 的中间件，只有redux有action和store的概念
 */

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddItemAction = () => ({
    type: ADD_TOTO_ITEM
})

export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})

export const getInitlist = () => ({
    type: GET_INIT_LIST
})
/* export const getTotolist = () => {
    return (dispatch) => {
        axios.get('/list.json').then((res) => {
            const data = res.data;
            const action = initListAction(data);
            dispatch(action);
            // console.log(data);
        })
    }
} */