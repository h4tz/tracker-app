// src/App.jsx
import React, { useState } from 'react';
import { Provider, useDispatch } from 'react-redux';
import store from './store/store';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseChart from './components/ExpenseChart';
import ExpenseFilter from './components/ExpenseFilter';
import { addExpense } from './store/reducers/expenseReducer';
import pic from './img/pic.jpg' ;


const AppContent = () => {
  const dispatch = useDispatch();
  const [showChart , setShowChart] = useState(true);
  const handleAddExpense = (expense) => {
    const newExpense = { id: Date.now(), ...expense };
    dispatch(addExpense(newExpense));
  };

  const toggleView = (view) => {
    if ( view == 'chart') {
      setShowChart(true);
    } else{
      setShowChart(false);
    }
  };

  return (
    <div className='bg-black'>
        <header className='w-[100%] h-20'></header>
    <div className='flex justify-evenly'>  
      <div className=' rounded-lg flex flex-col justify-evenly h-screen bg-gradient-to-t from-custom-dark to-custom-light '>
        <div>
        <div className='flex justify-center'>
          <img className="rounded-full w-[120px]" src={pic} alt="image description"/>
        </div>
        <div className=' py-2'>
        <h1 className=' text-white text-2xl  text-center font-bold'>Expense Tracker</h1>
        </div>
        <div className='flex flex-col items-center gap-3'>
          <button className=' w-20  bg-custom-dark hover:bg-custom-light text-white font-bold py-2 px-4 rounded-full' onClick={() => toggleView('list')} >list</button>
          <button className= 'w-20 bg-custom-dark hover:bg-custom-light text-white font-bold py-2 px-4 rounded-full' onClick={() => toggleView('chart')}>chart</button>
        </div>
      </div>
      <div>
      <div className=''>
      <ExpenseForm onSubmit={handleAddExpense} />
      </div>
      <div>
      <ExpenseFilter />
      </div>
      </div>
      </div>
      <div className=' rounded-lg w-[70%] flex justify-center items-center bg-gradient-to-t from-custom-dark to-custom-light  '>
        {showChart ? (  
        <ExpenseChart />
        ) : (
          <ExpenseList />
          )}
      </div>
    </div>
    <div className='w-[100%] h-20'>
      <footer></footer>
    </div>
    </div>
  );
};

const App = () => (
  <Provider store={store}>
    <AppContent />
  </Provider>
);

export default App;
