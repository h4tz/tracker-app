import React, {useState} from "react";
import { useDispatch } from 'react-redux'
import { filterExpenses } from '../store/actions/expenseActions';
import { date, getIn } from "yup";

const ExpenseFilter = () => {
    const [filters , setFilters] = useState({ category: '' , date: ''});
    const dispatch = useDispatch();

    const handleFilterChange = (e) => {
        const { name , value } = e.target;
        setFilters({ ...filters , [name]: value }) ;
        dispatch(filterExpenses({...filters , [name]:value}))
        }


return (
    <div className="flex flex-col gap-3">
      <select name="category" onChange={handleFilterChange} className=" rounded-md">
        <option value="">All</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Entertainment">Entertainment</option>
      </select>
      <input name="date" type="date" onChange={handleFilterChange} className="  rounded-lg"  />
    </div>
  );
}


export default ExpenseFilter;