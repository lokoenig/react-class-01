import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import ErrorPage from "./error";
import HomePage from "./home";



const HelpPage = ()=> (
  <div>
    <h2>HAAAAAALP</h2>
  </div>
);

const AddExpensePage = ()=> (
  <div>
    <h2>Create</h2>
  </div>
);

const EditPage = ()=> (
  <p>
    Enough about me. Let's talk about me.
  </p>
);


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
 {
    path: "help",
    element: <HelpPage />
  },
    {
    path: "create",
    element: <AddExpensePage />
  },
    {
    path: "edit",
    element: <EditPage />
  }
    ]
  },
 
]);








const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
