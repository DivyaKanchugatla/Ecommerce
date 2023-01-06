
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers/index';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'persist-key',
    storage
   
  }

const middleware = applyMiddleware(thunk,logger)

  const persistedReducer = persistReducer(persistConfig, reducers);
  
const store = createStore(persistedReducer,composeWithDevTools(middleware))
const persistor = persistStore(store);

export default store;
export {persistor}

