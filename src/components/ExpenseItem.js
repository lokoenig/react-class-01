import React from "react";
import './ExpenseItem.scss';
import EditExpenseButton from "./EditExpenseButton";

// Description, amount, creation date
const ExpenseItem = (props)=> (
<div
    className="expense-single"
    key={props.id}
>
    <span className="expense-single__description">{props.description}</span>
    <span className="expense-single__amount">
            {new Intl.NumberFormat(
                'en-US',
                { style: 'currency', currency: 'USD' }
            ).format(props.amount / 100)}
    
    </span>
    <span className="expense-singe__created">
    { props.created.toLocaleDateString()}
    </span>
        <EditExpenseButton expenseID={props.id} />
</div>
);

export default ExpenseItem;