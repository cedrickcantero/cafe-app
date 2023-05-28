import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {
  cafeReducer,
  employeeReducer,
  employeeCafeReducer,
} from './reducers';

// Combine the reducers
const rootReducer = combineReducers({
  cafeStore: combineReducers({
    cafe: cafeReducer,
    employees: employeeReducer,
    employeeCafes: employeeCafeReducer,
  }),
});

// Create the Redux store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
