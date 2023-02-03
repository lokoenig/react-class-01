const getFilteredExpenses = (expenses, { text, sortBy, dateRange }) => {
    return expenses.filter((expense) => {
        // is created date in filter range?
        let dateInRange = true; // if no date range, then all match

        if (typeof dateRange === 'object' && Object.keys(dateRange).length === 2){
            dateInRange = false;
            const startDateMatch =(
                (dateRange.start instanceof Date)
                &&
                expense.created.getTime() >= dateRange.start.getTime()
            );

            const endDateMatch =(
                (dateRange.end instanceof Date)
                &&
                expense.created.getTime() <= dateRange.end.getTime()
            );
            dateInRange = startDateMatch && endDateMatch;
        }


        // is filter string contained in text]?
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



        return dateInRange && textMatch;
    }).sort((a, b) => {
        if ('date' === sortBy) {
            return a.created < b.created ? 1 : a.created > b.created ? -1 : 0;
        } else {
            return a.amount < b.amount ? 1 : a.amount > b.amount ? -1 : 0;
        }
    });
};

export default getFilteredExpenses;
