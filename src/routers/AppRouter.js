import React from 'react';
import {
  createBrowserRouter,
} from 'react-router-dom';
import App from '../App';
import ErrorPage from "../components/error";
import HomePage from "../home";
import HelpPage from "../components/HelpPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";

const AppRouter = createBrowserRouter([
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
    path: "edit/",
    element: <EditExpensePage />
  },
     {
    path: "edit/:eid",
    element: <EditExpensePage />
  }
    ]
  },
 
]);

export default AppRouter;