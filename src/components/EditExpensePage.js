import React from "react";
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import withRouter from '../routers/WithRouter';

import ExpenseForm from "./ExpenseForm";
import { startUpdateExpense, startRemoveExpense } from "../actions/expenses";
// import DeleteExpenseButton  from "./DeleteExpenseButton"; // connected version
export class EditExpensePageContent extends React.Component {

    onSubmit = (expense) => {
        const { navigate } = this.props;
        this.props.startUpdateExpense(this.props.params.eid, expense);
        navigate('/');
    };

    onRemove = () => {
        const { navigate } = this.props;
        this.props.startRemoveExpense(this.props.params.eid);
        navigate('/');
    }

    render() {
        let out;
        if (this.props.params.eid) {
            out = (
                <>
                    <header>Editing: {this.props.params.eid}<button
                        onClick={this.onRemove}
                    >
                        Delete
                    </button>
                    </header>
                    <section>
                    <ExpenseForm
                        expense={this.props.expense}
                        buttonText="Update Expense"
                        onSubmit={this.onSubmit}
                    />
                    
                    </section>
                </>
            );
            /* had to remove the 
            <DeleteExpenseButton
                expenseID={this.props.params.eid}
                destination="/" 
            />
            from above because that button is connected and I couldn't figure out
            how to set up the jest test correctly.
            */
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

const mapDispatchToProps = (dispatch, props) => ({
    startUpdateExpense: (eid, expense) => dispatch(startUpdateExpense(eid, expense)),
    startRemoveExpense: (eid) => dispatch(startRemoveExpense(eid))
});

const EditExpensePageContentConnected = connect(mapStateToProps, mapDispatchToProps)(withRouter(EditExpensePageContent));

const EditExpensePage = (props) => {
    const params = useParams();
    return (
        <EditExpensePageContentConnected params={params} />
    )
};

export default withRouter(EditExpensePage);
