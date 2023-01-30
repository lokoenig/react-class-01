
const filtersReducerDef = {
    text: '',
    sortBy: 'date', // date or amount
    dateRange: { start: undefined, end: undefined }
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
                dateRange: action.dateRange
            };
            break;

        default:
            out = state;
    };
    return out;
};

export default filtersReducer;
