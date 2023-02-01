import React from "react";
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import ExpenseForm from "./ExpenseForm";
import { updateExpense } from "../actions/expenses";




const EditExpensePageContent = (props) =>{
    let out;
    if (props.params.eid) {
        out = (
            <>
            <div>Editing: {props.params.eid}</div>
                <ExpenseForm 
                    expense={props.expense}
                    onSubmit={(expense) => {
                        // props.dispatch(updateExpense(expense));
                       // navigate('/');
                        console.log('submit ExpenseForm', expense);
                        }
                    }

                />
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
