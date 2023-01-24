import { createStore } from "redux";
const store = createStore((state = { count: 0 }, action) => {
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
});

const unsub = store.subscribe( ()=>{
    console.log(store.getState());
})


store.dispatch({
    type: 'INC'
});
store.dispatch({
    type: 'DEC'
});

// unsub();

store.dispatch({
    type: 'INC',
    by: 10
});
store.dispatch({
    type: 'INC'
});
store.dispatch({
    type: 'RESET',
    to: 20
});


