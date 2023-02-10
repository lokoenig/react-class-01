import React from "react";
import { render, screen, waitFor, within } from '@testing-library/react';
import user from '@testing-library/user-event';

import { EditExpensePageContent } from "./EditExpensePage";
import ExpenseTestData from "../fixtures/expenses";

test('renders full Add Expense page', () => {
    const subSpy = jest.fn();
    const eid = ExpenseTestData[1].id;
    const fakeRouterParams = {eid: eid};
    const { getByText, asFragment } = render(
        <>
        <EditExpensePageContent
            addExpense={subSpy}
            params={fakeRouterParams}
        />
        </>);
    expect(asFragment()).toMatchSnapshot();
});
