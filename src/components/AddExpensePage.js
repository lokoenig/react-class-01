import React from "react";
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expenses";
import withRouter from '../routers/WithRouter';
export class AddExpensePage extends React.Component {

  
  onSubmit = (expense) => {
    const { navigate } = this.props;
    this.props.addExpense(expense);
    navigate('/');
  };

  render() {
    return(
    <div>
      <ExpenseForm
        onSubmit={this.onSubmit}
      />
    </div>
  )}

}

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpense(expense))
  });

export default connect(undefined, mapDispatchToProps)(withRouter(AddExpensePage));
