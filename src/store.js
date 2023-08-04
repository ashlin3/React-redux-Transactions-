import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import transactionReducer from './Reducers/transactionReducer';

const rootReducer = combineReducers({
  transactions: transactionReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
