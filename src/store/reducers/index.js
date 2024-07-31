// src/store/reducers/index.js
import { combineReducers } from '@reduxjs/toolkit';
import expenseReducer from './expenseReducer';

const rootReducer = combineReducers({
  expenses: expenseReducer,
  // other reducers...
});

export default rootReducer;
