import uuid from 'react-uuid';



// ADD_EXPENSE
export const addExpense = ({
    description = '',
    note = '',
    amount = 0,
    created = 0
} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        created
    }
});

// REMOVE_EXPENSE
export const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE',
    expense: {
        id
    }
});

// UPDATE_EXPENSE
export const updateExpense = (id, updates) => ({
    type: 'UPDATE_EXPENSE',
    id,
    updates
});

