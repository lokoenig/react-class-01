import React from "react";
import ExpensesList from "./ExpensesList";
import ExpensesListFilters from "./ExpensesListFilters";
import ExpensesListHeader from "./ExpensesListHeader";


function HomePage() {
  return (
    <>
      <ExpensesListHeader />
      <div>
        <ExpensesListFilters />
      </div>
      <ExpensesList />

    </>
  );
}

export default HomePage;