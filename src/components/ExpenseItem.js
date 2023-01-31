import React from "react";
import './ExpenseItem.scss';
import DeleteExpenseButton from "./DeleteExpenseButton";

// Description, amount, creation date

const ExpenseItem = (props)=> (
<div
    className="expense-single"
    key={props.id}
>
    <span className="expense-single__description">{props.description}</span>
    <span className="expense-single__amount">{props.amount}</span>
    <span className="expense-singe__created">{props.created}</span>
        <DeleteExpenseButton expenseID={props.id} />
</div>
);

export default ExpenseItem;