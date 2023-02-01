import React from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import ExpenseForm from "./ExpenseForm";
import { updateExpense } from "../actions/expenses";
import DeleteExpenseButton from "./DeleteExpenseButton";


const EditExpensePageContent = (props) => {
    const navigate = useNavigate();
    let out;
    if (props.params.eid) {
        out = (
            <>
                <div>Editing: {props.params.eid}</div>
                <ExpenseForm
                    expense={props.expense}
                    buttonText="Update Expense"
                    onSubmit={(expense) => {
                        props.dispatch(updateExpense(props.params.eid, expense));
                        navigate('/');
                    }
                    }
                />
                <DeleteExpenseButton
                expenseID={props.params.eid} 
                destination="/" />
            </>
        )
    } else {
        out = (
            <p>
                Enough about me. Let's talk about me.
                <br />
                This will actually be a list in the future.
            </p>
        );
    }
    return out;
}


const mapStateToProps = (state, ownProps) => {
    return {
        expense: state.expenses.find((expense) => {
            // return true;
            return expense.id === ownProps.params.eid;
        })
    }
}
const EditExpensePageContentConnected = connect(mapStateToProps)(EditExpensePageContent);

const EditExpensePage = (props) => {
    const params = useParams();
    return (
        <EditExpensePageContentConnected params={params} />
    )
};
export default EditExpensePage;
