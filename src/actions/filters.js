

// FILTER_SET_TEXT
export const setFilterText = (filterText = "") => ({
    type: 'FILTER_SET_TEXT',
    text: filterText
});

export const sortByAmount = () => ({
    type: 'FILTER_SET_SORT_FIELD',
    sortBy: 'amount'
});

export const sortByDate = () => ({
    type: 'FILTER_SET_SORT_FIELD',
    sortBy: 'date'
});

export const setFilterDateRange = (dates) => {
   // console.log('setFilterDateRange', dates);
    return ({
        type: 'FILTER_SET_DATE',
        dateRange: {
            start: dates[0],
            end: dates[1]
        }
    })
}
