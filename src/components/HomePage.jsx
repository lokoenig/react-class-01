import React from "react";
import ExpensesList from "./ExpensesList";
import ExpensesListFilters from "./ExpensesListFilters";
import ExpensesListHeader from "./ExpensesListHeader";


function HomePage() {
  return (
    <>
      <ExpensesListHeader />
      <section>
        <ExpensesListFilters />
     
      <ExpensesList />
      </section>

    </>
  );
}

export default HomePage;