
const expensesReducerDef = [];
export default (state = expensesReducerDef, action) => {
    let out;
    switch (action.type) {
        case 'ADD_EXPENSE':
            out = [...state, action.expense];
            break;

        case 'REMOVE_EXPENSE':
            out = state.filter((v) => {
                return (v.id !== action.expense.id)
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
