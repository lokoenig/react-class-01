import React from "react";
import { render, screen, waitFor, within } from '@testing-library/react';
import user from '@testing-library/user-event';

import ExpenseTestData from "../fixtures/expenses";
import ExpenseSingleTestData from "../fixtures/expense-single";

import ExpenseForm from "./ExpenseForm";


describe('ExpenseForm', () => {
    const onSubmitSpy = jest.fn();

    test('checks if empty ExpenseForm changed', () => {
        const targetExpense = Math.floor(Math.random() * ExpenseTestData.length);

        const { getByText, asFragment } = render(
            <ExpenseForm />
        );

        expect(asFragment()).toMatchSnapshot();
    });


    test('submits empty ExpenseForm', () => {
        const { getByText, asFragment } = render(
            <ExpenseForm
                onSubmit={onSubmitSpy}
            />
        );
        clickSubmitButton();
        const alertElem = screen.getByRole('alert', {
            name: /expense was not submitted/i
        });
        expect(alertElem).toBeInTheDocument(); // error message
    });

    test('submits valid ExpenseForm', () =>{
        const exSub =jest.fn();
        render(
            <ExpenseForm
                onSubmit={exSub}
                expense={ExpenseSingleTestData}
            />
        );
        clickSubmitButton();
        //screen.debug();

        expect(exSub).toBeCalled();
    });




    test('type valid number', () => {
        render(
            <ExpenseForm
                onSubmit={onSubmitSpy}
            />
        );

        const numberBox = screen.getByLabelText('Expense Amount');
        user.type(numberBox, '{selectall}{backspace}123.2');
        expect(numberBox).toHaveValue('123.2')
    })

    test('type invalid number', () => {
        render(
            <ExpenseForm
                onSubmit={onSubmitSpy}
            />
        );
        const numberBox = screen.getByLabelText('Expense Amount');
        user.type(numberBox, '{selectall}{backspace}12z3.2rr555');
        expect(numberBox).toHaveValue('123.25')
    })
});


function clickSubmitButton() {
    user.click(
        screen.getByRole('button', { name: /Add Expense/ }),
        undefined,
        ({delay:2})
        );
}