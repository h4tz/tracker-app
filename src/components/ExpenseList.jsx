import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import { deleteExpense , editExpense } from '../store/reducers/expenseReducer';

const ExpenseList = () => {
    const expenses = useSelector((state) => state.expenses.expenses);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        console.log('Dispatching delete for id:', id);
        dispatch(deleteExpense(id));
      };
    
      return (
        <div>
          <h2 className=" text-4xl text-white">Expense List</h2>
          <ul className=" text-2xl text-white">
            {expenses.map((expense) => (
              <li
              className=" flex items-center"
               key={expense.id}>
                {expense.name} - {expense.amount}
                <button onClick={() => handleDelete(expense.id)}  className=" bg-custom-dark hover:bg-custom-light text-white  py-2 px-4 rounded-full  mx-11  text-xs"  >-</button>
              </li>
            ))}
          </ul>
        </div>
      );
    };
export default ExpenseList;