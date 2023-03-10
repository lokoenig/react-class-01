import React from "react";
import { render, screen, waitFor, within } from '@testing-library/react';
import user from '@testing-library/user-event';

import {ExpensesListFilters} from "./ExpensesListFilters";
import { FilterTestData , nullFilterTestData} from "../fixtures/filter";

let setFilterText, sortByDate, sortByAmount, setFilterDateRange;
// let getByText, asFragment;

const onSubmitSpy = jest.fn();

beforeEach( ()=>{
    setFilterText = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setFilterDateRange = jest.fn();
    /*
    render(<ExpensesListFilters
        filters={FilterTestData} 
        setFilterText={setFilterText}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setFilterDateRange={setFilterDateRange}
        />);
*/
});

test('renders ExpensesList Filters component with normal data', () => {
    const { asFragment, getByText } = render(<ExpensesListFilters
        filters={FilterTestData}
        setFilterText={setFilterText}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setFilterDateRange={setFilterDateRange}
    />);
  
    expect(asFragment()).toMatchSnapshot();
});

test('renders ExpensesList Filters component with null data', () => {
    const { asFragment, getByText } = render(<ExpensesListFilters
        filters={nullFilterTestData}
        setFilterText={setFilterText}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setFilterDateRange={setFilterDateRange}
    />);

    expect(asFragment()).toMatchSnapshot();
});

test('Type into the expense search filter', () => {
     render(<ExpensesListFilters
        filters={FilterTestData}
        setFilterText = { setFilterText }
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setFilterDateRange={setFilterDateRange}
    />);
    const searchTextBox = screen.getByLabelText('Search Text');
    user.type(searchTextBox, 'bill');
    expect(setFilterText).toHaveBeenCalledTimes(4)// 4 letters in bill

});

test('Sort by Amount', ()=>{
    render(<ExpensesListFilters
        filters={FilterTestData}
        setFilterText={setFilterText}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setFilterDateRange={setFilterDateRange}
    />)
    const sortSelector = screen.getByLabelText('Sort by');
    user.selectOptions(sortSelector, ['amount']);
    expect(sortByAmount).toHaveBeenCalled()

})

test('Sort by Date', () => {
    render(<ExpensesListFilters
        filters={FilterTestData}
        setFilterText={setFilterText}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setFilterDateRange={setFilterDateRange}
    />)
    const sortSelector = screen.getByLabelText('Sort by');
    user.selectOptions(sortSelector, ['date']);
    expect(sortByDate).toHaveBeenCalled()

})

/* Don't see a user event method for this: 
There are aria-labels for every element to navigate months and days

test('Change date range is updating', () => {
    render(<ExpensesListFilters
        filters={FilterTestData}
        setFilterText={setFilterText}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setFilterDateRange={setFilterDateRange}
    />)
    const sortSelector = screen.getByLabelText('Sort by');
    user.selectOptions(sortSelector, ['amount']);
    expect(sortByAmount).toHaveBeenCalled()

})
*/

