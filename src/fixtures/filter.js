export const FilterTestData = {
    text: '',
    sortBy: 'date', // date or amount
    dateRange: {
        start: (new Date(1980, 0, 0)),
        end: (new Date(2029, 0, 0))
    }
}

export const nullFilterTestData = {
    text: '',
    sortBy: 'date', // date or amount
    dateRange: {
        start: undefined,
        end: undefined
    }
}

export default FilterTestData;