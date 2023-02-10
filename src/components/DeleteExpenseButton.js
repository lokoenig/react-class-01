import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";
import withRouter from '../routers/WithRouter';

export class DeleteExpenseButton extends React.Component{

    onDeleteExpense = ()=>{
        console.log('Delete',this.props);
        const { navigate } = this.props;
        this.props.removeExpense();
        navigate(this.props.destination.length ? this.props.destination : '/');
    };

    render(){
        return(
        <>
        <button
        onClick={this.onDeleteExpense}
        >delete
        </button>
        </>
        );
    }


}


const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    }
}

const mapDispatchToProps = (dispatch) => ({
    removeExpense: (expense) => dispatch(removeExpense(expense))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DeleteExpenseButton));
