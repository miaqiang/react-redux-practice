import { createStore } from 'redux';

import reducer from './reducer';

/* 
1.store是唯一的
2.只有store能改变自己的数据
3.
 */
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;