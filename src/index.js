import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import './index.css';
import "react-datepicker/dist/react-datepicker.css";
import "./components/ExpenseForm.scss";

import reportWebVitals from './reportWebVitals';
import {
  RouterProvider,
} from 'react-router-dom';

import AppRouter from './routers/AppRouter';

import configureStore from "./store/configureStore";
import { addExpense, removeExpense, updateExpense } from "./actions/expenses";
import { setFilterText, sortByAmount, sortByDate } from "./actions/filters";
import getFilteredExpenses from "./selectors/expenses";
const store = configureStore();
store.dispatch(addExpense({
  description: 'water bill',
  amount: 2000,
  created: (new Date('Feb 22, 2022'))
}));
store.dispatch(addExpense({
  description: 'electric bill',
  amount: 3500,
  created: (new Date('January 1, 2021'))
}));
store.dispatch(addExpense({
  description: 'Salads',
  amount: 1200,
  created: (new Date('December 12, 2021'))
}));
store.dispatch(addExpense({
  description: 'Internet',
  amount: 4000,
  created: (new Date('Nov 1, 2022'))
}));
store.dispatch(addExpense({
  description: 'Gym membership',
  amount: 4222000,
  created: (new Date('Feb 2, 2023'))
}));


store.dispatch(setFilterText());
store.dispatch(sortByDate());
const currentState = store.getState();
const filtered = getFilteredExpenses(currentState.expenses, currentState.filters);

console.log(filtered);

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Provider store={store} >
      <RouterProvider router={AppRouter} />
    </Provider>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
