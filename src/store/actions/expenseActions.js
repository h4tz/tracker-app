export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    payload: expense ,
});

export const editExpense = (expense) => ({
    type: 'EDIT_EXPENSE',
    payload: expense,
});

export const deleteExpense = (id) => ({
    type: 'DELETE_EXPENSE',
    payload: id,
});

export const filterExpenses = (filters) => ({
    type: 'FILTER_EXPENSES',
    payload: filters,
  });
  