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

    </>
  );
}

export default HomePage;