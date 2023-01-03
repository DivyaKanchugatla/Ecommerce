
import { createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import reducers from './reducers/index';
import thunk from 'redux-thunk';
import {logger} from 'redux-logger';

const middleware= applyMiddleware(thunk,logger)


const store=createStore(reducers,composeWithDevTools(middleware))
export default store;


