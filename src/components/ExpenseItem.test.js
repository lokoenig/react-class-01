import React from "react";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";

import ExpenseSingleTestData from "../fixtures/expense-single";

import ExpenseItem from "./ExpenseItem";


test('ExpenseItem - render single item', ()=>{
    const { getByText, asFragment } = 
        render(
            <BrowserRouter>
            <ExpenseItem 
                id={ExpenseSingleTestData.id}
                amount={ExpenseSingleTestData.amount}
                created={ExpenseSingleTestData.created}
                note={ExpenseSingleTestData.note}
                description={ExpenseSingleTestData.description}
            />
            </BrowserRouter>
        );
    
  //  screen.debug();
    expect(asFragment()).toMatchSnapshot();
});