import React from "react";
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateExpense } from "../actions/expenses";




const EditExpensePageContent = (props) =>{
    console.log('EditExpensePageContent', props)
    let out;
 
    if (props.params.eid) {
        out = (
            <p>
                Editing {props.params.eid}
            </p>
        )
    } else {
        out = (
            <p>
                Enough about me. Let's talk about me.
            </p>
        );
    }
    return out;
}


const mapStateToProps = (state, ownProps) => {
    console.log('mapStateToProps', ownProps)
    return {
        expense: state.expenses.find((expense) => {
          return expense.id === ownProps.params.eid;
        // return true;
        })
    }
}
connect(mapStateToProps)(EditExpensePageContent);



const EditExpensePage = () => {
    const params = useParams();
    return (<EditExpensePageContent params={params} />)
};
export default EditExpensePage;
