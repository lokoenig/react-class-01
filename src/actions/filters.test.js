import { isDate, format } from 'date-fns';
import { setFilterText, sortByAmount, sortByDate, setFilterDateRange } from "./filters";

test('setFilterText populated', () => {
    const result = setFilterText('cranBerries');
    expect(result).toEqual({
        type: 'FILTER_SET_TEXT',
        text: 'cranBerries'
    })
});
test('setFilterText default', () => {
    const result = setFilterText();
    expect(result).toEqual({
        type: 'FILTER_SET_TEXT',
        text: ''
    })
});

test('sortByAmount', () => {
    const result = sortByAmount();
    expect(result).toEqual({
        type: 'FILTER_SET_SORT_FIELD',
        sortBy: 'amount'
    })
});

test('sortByDate', () => {
    const result = sortByDate();
    expect(result).toEqual({
        type: 'FILTER_SET_SORT_FIELD',
        sortBy: 'date'
    })
});



test('setFilterDateRange populated', () => {
    const result = setFilterDateRange([new Date('1/2/2013'), new Date('2/28/2023')]);
    expect(result).toEqual({
        type: 'FILTER_SET_DATE',
        dateRange: {
            start: new Date('1/2/2013'),
            end: new Date('2/28/2023')
        }
    })
});

