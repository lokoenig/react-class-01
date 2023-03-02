const authReducerDef = {};
export default (state = authReducerDef, action) => {
    console.log('authReducer', action.type, action.uid)
    switch (action.type){
        case 'LOGIN':
            return {uid: action.uid}

        case 'LOGOUT':
            return {};

        default:
            return state;
    }
}