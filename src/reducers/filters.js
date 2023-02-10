import { startOfMonth, endOfMonth } from 'date-fns'

const filtersReducerDef = {
    text: '',
    sortBy: 'date', // date or amount
    dateRange: { 
        start: (new Date(2002,1,1)),
        end: endOfMonth(new Date())
    }
};
const filtersReducer = (state = filtersReducerDef, action) => {
    let out;
    switch (action.type) {
        case 'FILTER_SET_TEXT':
            out = {
                ...state,
                text: action.text
            };
            break;
        case 'FILTER_SET_SORT_FIELD':
            out = {
                ...state,
                sortBy: action.sortBy // this should have sanity checking
            }
            break;

        case 'FILTER_SET_DATE':
            out = {
                ...state,
                dateRange: {
                    start: action.dateRange.start,
                    end: action.dateRange.end
                }
            };
            break;

        default:
            out = state;
    };
// console.log(typeof state.dateRange.start)
   // console.log(out);
    return out;
};

export default filtersReducer;
