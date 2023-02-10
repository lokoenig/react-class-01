import React from "react";
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import withRouter from '../routers/WithRouter';

import ExpenseForm from "./ExpenseForm";
import { updateExpense } from "../actions/expenses";
import DeleteExpenseButton from "./DeleteExpenseButton";

export class EditExpensePageContent extends React.Component{

    onSubmit = (expense) => {
        const { navigate } = this.props;
        this.props.updateExpense(this.props.params.eid, expense);
        navigate('/');
    };

    render(){
        let out;
        console.log('EditExpensePageContent', this.props);
        if(this.props.params.eid) {
            out = (
                <>
                    <div>Editing: {this.props.params.eid}</div>
                    <ExpenseForm
                        expense={this.props.expense}
                        buttonText="Update Expense"
                        onSubmit={this.onSubmit}
                    />
                    <DeleteExpenseButton
                        expenseID={this.props.params.eid}
                        destination="/" />
                </>
            );
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
};


const mapStateToProps = (state, ownProps) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === ownProps.params.eid;
        })
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateExpense: (eid, expense) => dispatch(updateExpense(eid, expense))
});

const EditExpensePageContentConnected = connect(mapStateToProps, mapDispatchToProps)(withRouter(EditExpensePageContent));

const EditExpensePage = (props) => {
    const params = useParams();
    return (
        <EditExpensePageContentConnected params={params} />
    )
};

export default withRouter(EditExpensePage);
