import React from "react";
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expenses";


const AddExpensePage = (props) => {
  const navigate = useNavigate();
  return (
  <div>
    <ExpenseForm
        onSubmit={(expense) => {
          props.onSubmit(expense);
          navigate('/');
        }
        }
    />
  </div>
)};

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (expense) => dispatch(addExpense(expense))
  });

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
