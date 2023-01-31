import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import './index.css';
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
  created: 13000
}));
store.dispatch(addExpense({
  description: 'electric bill',
  amount: 3500,
  created: 900
}));
store.dispatch(addExpense({
  description: 'Salads',
  amount: 1200,
  created: 1100
}));


// console.log(store.getState());

store.dispatch(setFilterText());
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
