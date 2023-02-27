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

import { firebase } from './firebase/firebase';
import { getAuth } from "firebase/auth";

 

import AppRouter from './routers/AppRouter';
import { redirect } from "react-router-dom";
//import { HashRouter } from 'react-router-dom'


import configureStore from "./store/configureStore";
// set default filters:
import { setFilterText, sortByDate } from "./actions/filters";
import getFilteredExpenses from "./selectors/expenses";
import {startSetExpenses} from "./actions/expenses";
const store = configureStore();



store.dispatch(setFilterText());
store.dispatch(sortByDate());
const currentState = store.getState();
const filtered = getFilteredExpenses(currentState.expenses, currentState.filters);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <p>Loading</p>
  </>
);

store.dispatch(startSetExpenses() ).then( ()=>{
  root.render(
    <React.StrictMode>
      <Provider store={store} >
        <RouterProvider router={AppRouter} />
      </Provider>
    </React.StrictMode>
  );
})

// test some auth stuff:
const firebaseAuth = getAuth(firebase);
firebaseAuth.onAuthStateChanged( (user) => {
  if (user) {
    console.log('logging in');
    redirect("/home");

  } else {
    console.log('logging out');
     redirect("/");
  }
})



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
