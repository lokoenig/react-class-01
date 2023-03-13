import React from 'react';
import {
  createBrowserRouter,
} from 'react-router-dom';
import App from '../App';
import ErrorPage from "../components/error";
import HomePage from "../HomePage";
import HelpPage from "../components/HelpPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import LoginPage from '../components/LoginPage';
import SplashPage from '../components/SplashPage';


const AppRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <SplashPage />,
      errorElement: <ErrorPage />
  },
    {
      path: "login",
      element: <LoginPage />,
      errorElement: <ErrorPage />
    },
    {
      element: <App />,
      children: [
        {
          path: "home",
          element: <HomePage />
        },
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
  ]
);

export default AppRouter;