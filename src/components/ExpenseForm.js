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
        created: moment(),
        errorMsg: ''
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

    };

    onSubmit = (e)=>{
        e.preventDefault();
        // So some basic validation:
        console.log(this.state);

        if (!this.state.description.length || !this.state.amount.length){
            this.setState(() => ({
                errorMsg: 'I am the Egg Man'
            }));
            console.log('error');

        } else {
            this.setState(() => ({
                errorMsg: ''
            }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                created: this.state.created.valueOf(),
                note: this.state.note
            });
            console.log('onSubmit');

        }
    }

    render() {
        return (
            <>
                <h1>I be a form!</h1>
                {this.state.errorMsg &&
                    <div className="pre-form-error-banner" key="errMsg1">
                        {this.state.errorMsg}
                    </div>
                }
                <form onSubmit={this.onSubmit}>
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