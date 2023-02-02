import React from "react";
import { connect } from "react-redux";

import { DateRangePicker } from '@mui/x-date-pickers/DateRangePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';



import { setFilterText, sortByDate, sortByAmount } from "../actions/filters";

const ExpensesListFilters = (props)=>(
<>
    <form>
        <input 
        type="text" 
        value= {props.filters.text} 
        onChange={ (e)=>{
            props.dispatch(setFilterText(e.target.value))
        }} />
        <select
        value= {props.filters.sortBy}
        onChange={ (e)=>{
            if ('date' === e.target.value){
                props.dispatch(sortByDate());
            }else{
                props.dispatch(sortByAmount());
            }
        }}
        >
            <option value="date" >Date</option>
            <option value="amount" >Amount</option>
        </select>
    </form>
</>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpensesListFilters);