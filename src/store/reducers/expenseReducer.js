// src/store/reducers/expenseReducer.js
import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react';

const initialState = {
    expenses: [],
};

const expenseSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        addExpense: (state, action) => {
            state.expenses.push(action.payload);
        },
        editExpense: (state, action) => {
            const index = state.expenses.findIndex(expense => expense.id === action.payload.id);
            if (index !== -1) {
                state.expenses[index] = action.payload;
            }
        },
        deleteExpense: (state, action) => {
            console.log('delete' , action.payload ) ;
            state.expenses = state.expenses.filter(expense => expense.id !== action.payload);
        },
    },
});

export const { addExpense, editExpense, deleteExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
