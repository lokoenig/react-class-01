import React from "react";
import {AddExpensePage} from "./AddExpensePage";
import { render, screen, waitFor, within } from '@testing-library/react';
import user from '@testing-library/user-event';

test('renders full Add Expense page', () => {
    const subSpy = jest.fn();
    const { getByText, asFragment } = render(
        <AddExpensePage
            onSubmit={subSpy}
        />);
    expect(asFragment()).toMatchSnapshot();
});
