import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer';
import todoSagas from "./saga";
/* 
1.store是唯一的
2.只有store能改变自己的数据
3.window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 */

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;


//使用redux-thunk
/* const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
); */
//使用redux-saga
const sagaMiddleware = createSagaMiddleware();


const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
    // other store enhancers if any
);
const store = createStore(reducer, enhancer);
sagaMiddleware.run(todoSagas);

export default store;