import React, { useState } from "react";
import { connect } from "react-redux";
import { format, startOfMonth, endOfMonth } from 'date-fns'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./ExpensesListFilters.scss";


import { setFilterText, sortByDate, sortByAmount, setFilterDateRange } from "../actions/filters";


class ExpensesListFilters extends React.Component {
    constructor(props) {
        super(props);
        let pf = props.filters;

        this.state = {
            dateStart: pf ? pf.dateRange.start : (new Date(2019, 11, 17)),
            dateEnd: pf ? pf.dateRange.end : endOfMonth(new Date())
            };
    };

    onTextChange = (e) => {
        this.props.setFilterText(e.target.value)
    }

    onSortChange = (e) => {
        if ('date' === e.target.value) {
            this.props.sortByDate();
        } else {
            this.props.sortByAmount();
        }
    }
    
    updateDateRange = (dates) =>{
        console.log('dates', dates)
        const[start, end] = dates;
        this.props.setFilterDateRange([start, end]);
        console.log('start' + start);
        console.log('end' + end);
    }

    render() {
     return   (
            <>
                <form>
                    <input
                        type="text"
                        value={this.props.filters.text}
                        onChange={this.onTextChange} />
                    <select
                        value={this.props.filters.sortBy}
                        onChange={this.onSortChange}
                    >
                        <option value="date" >Date</option>
                        <option value="amount" >Amount</option>
                    </select>
                 <p>start: {format(this.props.filters.dateRange.start, 'MM/dd/yyyy')}</p>
                 <p>end: {format(this.props.filters.dateRange.end, 'MM/dd/yyyy')}</p>
                 <label htmlFor="double-pick">Date Range</label>
                    <DatePicker
                        id="double-pick"
                        selected={this.state.dateStart}
                        startDate={this.state.dateStart}
                        endDate={this.state.dateEnd}
                        onChange={(dates) => {
                            const [start, end] = dates;
                            this.setState(() => ({
                                dateStart: start
                            }));
                            this.setState(() => ({
                                dateEnd: end
                            }));
                            if (end) {
                                this.updateDateRange([start, end]);
                            } else {
                                console.log('dates', dates)
                                console.log('clear?');
                                // we may need a clear range function
                            }
                         }
                        }
                        selectsRange
                        isClearable
                        placeholderText="Select a display range"
                    />
                </form>
            </>
        )
    }


}

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch)=>({
    setFilterText: (text) => dispatch(setFilterText(text)),
    sortByDate: () =>  dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setFilterDateRange: (v) => dispatch(setFilterDateRange(v))
        
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesListFilters);