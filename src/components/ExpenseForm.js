import React from "react";
import moment from "moment";

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';


import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';





export default class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: '',
        amount: '0',
        created: moment()
    };
    onChangeDescription = (e) => {
        const newDiscription = e.target.value;
        this.setState(() => ({
            description: newDiscription
        }));
    };

    onChangeNote = (e) => {
        const note = e.target.value;
        this.setState(() => ({
            note
        }));
    };

    onChangeAmount = (e)=>{
        const v = e.target.value;
        if (v.match(/^\d*\.?\d{0,2}$/)) {
            this.setState(() => ({
                amount: v
            }));
        }
    };

    onChangeDate = (newValue: Dayjs | null) => {
        this.setState(() => ({
            created: newValue
        }));
        console.log('changedate', this.state);

    };

    render() {
        return (
            <>
                <h1>I be a form!</h1>
                <form>
                    <input
                        type="text"
                        placeholder="Description"
                        value={this.state.description}
                        onChange={this.onChangeDescription}
                        autoFocus
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onChangeAmount}

                    />
                    <textarea
                        placeholder="Note"
                        value={this.state.note}
                        onChange={this.onChangeNote}
                        >
                    </textarea>

                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <DatePicker
                            label="Date Added"
                            value={this.state.created}
                            onChange={this.onChangeDate}
                            renderInput={(params) => <TextField {...params} />}

                        />
                    </LocalizationProvider>
                    <button>Add/Update Expense</button>
                </form>
            </>
        )
    }
}