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
            dateStart: pf ? pf.dateRange.start : startOfMonth(new Date()),
            dateEnd: pf ? pf.dateRange.end : endOfMonth(new Date())
            };
    };
    
     updateDateRange = (dates) =>{
        const [start, end] = dates;
        console.log('start' + start);
        console.log('end' + end)

    }

    render() {
     return   (
            <>
                <form>
                    <input
                        type="text"
                        value={this.props.filters.text}
                        onChange={(e) => {
                            this.props.dispatch(setFilterText(e.target.value))
                        }} />
                    <select
                        value={this.props.filters.sortBy}
                        onChange={(e) => {
                            if ('date' === e.target.value) {
                                this.props.dispatch(sortByDate());
                            } else {
                                this.props.dispatch(sortByAmount());
                            }
                        }}
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
                            console.log('dates', dates)
                            this.props.dispatch(setFilterDateRange(
                                [start, end]
                                ));
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

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpensesListFilters);