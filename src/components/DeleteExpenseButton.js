import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";
import withRouter from '../routers/WithRouter';

export const DeleteExpenseButton = (props) => {
    return (
        <>
<button 
    onClick={
        ()=> {
            props.remove();
            navigate(props.destination.length ?  props.destination : '/');
        }
    }
    >delete
    </button>
        </>
)};

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    }
}

const mapDispatchToProps = (dispatch) => ({
    removeExpense: (expense) => dispatch(addExpense(expense))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DeleteExpenseButton));
