const getFilteredExpenses = (expenses, { text, sortBy, dateRange }) => {

    return expenses.filter((expense) => {
        const startDateMatch =
            typeof dateRange.start !== 'number'
            ||
            expense.created >= dateRange.start;
        const endDateMatch =
            typeof dateRange.end !== 'number'
            ||
            expense.created <= dateRange.end;

        let textMatch = typeof text !== 'string' || text.length === 0;
        if (false === textMatch
            &&
            typeof expense.description === 'string'
        ) {
            const haystack = expense.description.toLowerCase();
            const needle = text.toLowerCase();
            textMatch = haystack.includes(needle);

        }
        ;
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if ('date' === sortBy) {
            return a.created < b.created ? 1 : a.created > b.created ? -1 : 0;
        } else {
            return a.amount < b.amount ? 1 : a.amount > b.amount ? -1 : 0;
        }
    });
};

export default getFilteredExpenses;
