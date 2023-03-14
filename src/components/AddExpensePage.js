import React from "react";
import { connect } from 'react-redux';
import ExpenseForm from "./ExpenseForm";
import { startAddExpense } from "../actions/expenses";
import withRouter from '../routers/WithRouter';
export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    const { navigate } = this.props;
    this.props.startAddExpense(expense);
    navigate('/');
  };

  render() {
    return(
    <>
    <header>Huh</header>
    <section>
      <ExpenseForm
        onSubmit={this.onSubmit}
      />
      </section>
    </>
  )}

}

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
  });

export default connect(undefined, mapDispatchToProps)(withRouter(AddExpensePage));
