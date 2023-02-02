import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        let pe = props.expense;
       
        this.state = {
            description: pe ? pe.description : '',
            note: pe ? pe.note : '',
            amount: pe ? (pe.amount/100).toString() : '0',
            created: pe ? pe.created : (new Date()),
            errorMsg: '',
            buttonText: props.buttonText ? props.buttonText : 'Add Expense'
        };
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

    onChangeAmount = (e) => {
        const v = e.target.value;
        if (v.match(/^\d*\.?\d{0,2}$/)) {
            this.setState(() => ({
                amount: v
            }));
        }
    };

    onChangeDate = (newValue) => {
        this.setState(() => ({
            created: newValue
        }));

    };

    onSubmit = (e) => {
        e.preventDefault();
        // So some basic validation:
        if (!this.state.description.length || !this.state.amount.length) {
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

                        <DatePicker
                            selected={this.state.created}
                            onChange={this.onChangeDate}
                        />
                    <button>{this.state.buttonText}</button>
                </form>
            </>
        )
    }
}