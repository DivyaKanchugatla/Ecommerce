import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers/index';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
 

const middleware = applyMiddleware(thunk,logger)
const persistConfig = {
    key: 'authType',
    storage: storage,
    // whitelist: ['authType']  which reducer want to store
  };
  const pReducer = persistReducer(persistConfig, reducers);
  
const store = createStore(pReducer,composeWithDevTools(middleware))
const persistor = persistStore(store);

export default store;
export {persistor}

