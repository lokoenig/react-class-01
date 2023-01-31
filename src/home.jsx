import React from "react";
import ExpensesList from "./components/ExpensesList";
import ExpensesListFilters from "./components/ExpensesListFilters";

function HomePage() {
    return (
        <>
     <h2>If you dare</h2>
     <div>
          <ExpensesListFilters />
     </div>
        <ExpensesList />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </>
    );
}

export default HomePage;