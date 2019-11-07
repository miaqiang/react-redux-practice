

import { fromJS } from "immutable";
//import { constans } from '.';

const defaultState = fromJS({

    topicList: [
        {
            id: 1,
            title: '社会热点'
        }, {
            id: 2,
            title: '社会热点2'
        }, {
            id: 3,
            title: '社会热点3'
        }, {
            id: 4,
            title: '社会热点4'
        }, {
            id: 5,
            title: '社会热点5'
        },

    ]
});

export default (state = defaultState, action) => {

    //immutable对象的set方法，会结合之前的immutable对象的值和设置的值，返回一个全新的对象

    switch (action.type) {

        default:
            return state;
    }
}