import { createStore } from "redux";

// Reducers:
const countReducer = (state = { count: 0 }, action) => {
    var out; // function scoped
    var by;

    switch (action.type) {
        case 'INC':
            by = typeof action.by === 'number' ? action.by : 1;
            out = { count: state.count + by };
            break;

        case 'DEC':
            by = typeof action.by === 'number' ? action.by : 1;
            out = { count: state.count - by };
            break;

        case 'RESET':
            const resetTo = typeof action.to === 'number' ? action.to : 0;
            out = { count: resetTo };
            break;
        default:
            out = state;
    }

    return out;
};

const store = createStore(countReducer);

const incStore = ({by=1} = {})=> ({
    type: 'INC',
    by
});
const decStore = ({ by = 1 } = {}) => ({
    type: 'DEC',
    by
});
const resetStore = ({ to = 1 } = {}) => ({
    type: 'RESET',
    to
});


const unsub = store.subscribe( ()=>{
    console.log(store.getState());
})


store.dispatch(incStore());
store.dispatch(incStore({by:10}));
store.dispatch(decStore());
store.dispatch(incStore());
store.dispatch(resetStore());
store.dispatch(resetStore({to:100}));

// unsub();


