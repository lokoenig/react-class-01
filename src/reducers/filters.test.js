import { isDate, startOfMonth, endOfMonth } from 'date-fns'
import filtersReducer from "./filters";

const defFilters = {
    text: '',
    sortBy: 'date',
    dateRange: {
        start: startOfMonth(new Date()),
        end: endOfMonth(new Date())
    }
};

test('filtersReducer @@INIT (undef state)', () => {
    const result = filtersReducer(undefined, { type: '@@INIT' });
    expect(result).toEqual({
        ...defFilters
    })
});

test('filtersReducer FILTER_SET_SORT_FIELD AMOUNT (undef state)', () => {
    const result = filtersReducer(undefined, { type: 'FILTER_SET_SORT_FIELD', sortBy: 'amount' });
    expect(result).toEqual({
        ...defFilters,
        sortBy: 'amount'
    })
});

test('filtersReducer FILTER_SET_SORT_FIELD DATE (mini state)', () => {
    const miniState ={
        ...defFilters,
        sortBy: 'nonvalid value'
    };

    const action ={
        type: 'FILTER_SET_SORT_FIELD',
        sortBy: 'date'
    };

    const result = filtersReducer(miniState, action);
    expect(result).toEqual({
        ...defFilters,
        sortBy: 'date'
    })
});

test('filtersReducer FILTER_SET_TEXT', () => {
    const miniState = {
        ...defFilters,
        text: 'nonvalid value'
    };
    
    const action = {
        type: 'FILTER_SET_TEXT',
        text: 'I am the walrus'
    };

    const result = filtersReducer(miniState, action);
    expect(result).toEqual({
        ...defFilters,
        text: 'I am the walrus'
    })
});

test('FILTER_SET_DATE', ()=>{
    const testRange = {
        start: (new Date(2004, 0, 6)),
        end: (new Date(2023, 8, 1))
    }
    
    const miniState = {
        ...defFilters,
        dateRange: {
            start: (new Date(1981, 5, 14)),
            end: (new Date(2032, 1, 1))
        }
    };

    const action = {
        type: 'FILTER_SET_DATE',
        dateRange: testRange
    };

    const result = filtersReducer(miniState, action);
    expect(result).toEqual({
        ...defFilters,
        dateRange: testRange
    })
});