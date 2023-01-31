import React from "react";
import { connect } from "react-redux";
import { setFilterText } from "../actions/filters";

const ExpensesListFilters = (props)=>(
<>
    <form>
        <input 
        type="text" 
        value= {props.filters.text} 
        onChange={ (e)=>{
            props.dispatch(setFilterText(e.target.value))
        }} />
    </form>
</>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpensesListFilters);