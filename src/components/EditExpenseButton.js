import React from "react";
import { useNavigate } from 'react-router-dom';

const  EditExpenseButton = (props) => {
    const navigate = useNavigate();
    return (
    <button
        onClick={
            () => {
                navigate('/edit/' + props.expenseID);
            }
        }
    >Edit
    </button>
    );
};
export default EditExpenseButton
