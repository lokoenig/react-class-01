import uuid from 'react-uuid';

// ADD_EXPENSE
export const addExpense = ({
    description = '',
    note = '',
    amount = 0,
    created = new Date()
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
export const removeExpense = (id) => {
    return {
        type: 'REMOVE_EXPENSE',
        id : id
    }
};

// UPDATE_EXPENSE
export const updateExpense = (id, updates) => {
    return {
        type: 'UPDATE_EXPENSE',
        id,
        updates
    }
};

