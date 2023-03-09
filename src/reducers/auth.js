const authReducerDef = {};
export default (state = authReducerDef, action) => {
    console.log('authReducer', action.type, action.uid)
    switch (action.type){
        case 'LOGIN':
            return {
                ...state,
                uid: action.uid
            }

        case 'LOGOUT':
            return {
                ...state,
                uid:undefined
            };

        default:
            return state;
    }
}