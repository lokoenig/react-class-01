
const expensesReducerDef = [];
const expensesReducer = (state = expensesReducerDef, action) => {
    let out;
    switch (action.type) {
        case 'ADD_EXPENSE':
            out = [...state, action.expense];
            break;

        case 'REMOVE_EXPENSE':
            const expenseID = action.expense.id;
            out = state.filter((v) => {
                return (v.id !== expenseID)
            });
            break;

        case 'UPDATE_EXPENSE':
            out = state.map((v) => {
                if (v.id === action.id) {
                    return {
                        ...v,
                        ...action.updates
                    };
                } else {
                    return v;
                }
            });
            break;

        default:
            out = state;
    };
    return out;
};

export default expensesReducer;
