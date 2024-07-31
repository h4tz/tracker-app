// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import expenseReducer from './reducers/expenseReducer';

const store = configureStore({
    reducer: {
        expenses: expenseReducer,
    },
});

export default store;
