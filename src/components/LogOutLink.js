import React from "react";
import { connect } from 'react-redux';

import {startLogout} from "../actions/firebase-auth";

const localLogOut = () => {
    console.log('startLogout');
    startLogout();
}
export const LogOutLink = ({startLogout}) => {
    return (
        <>
            <a onClick={localLogOut}>Log Out</a>
        </>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(LogOutLink);  