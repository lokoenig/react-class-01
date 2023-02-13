import React from "react";
import DatePicker from "react-datepicker";

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        let pe = props.expense;

        this.state = {
            description: pe ? pe.description : '',
            note: pe ? pe.note : '',
            amount: pe ? (pe.amount / 100).toString() : '0',
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
            // missing description or amount
            this.setState(() => ({
                errorMsg: 'I am the Egg Man'
            }));

            // no errors: clear errors
        } else {
            this.setState(() => ({
                errorMsg: ''
            }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                created: this.state.created,
                note: this.state.note
            });
           // console.log('onSubmit');
        }
    }

    render() {
        return (
            <>
                <h1>I be a form!</h1>
                {this.state.errorMsg &&
                    <div className="pre-form-error-banner" role="alert" title="Expense was not submitted" key="errMsg1">
                        {this.state.errorMsg}
                    </div>
                }
                <form onSubmit={this.onSubmit} title="Edit An Expense Entry" >
                    <div className="form-input-group">
                        <div className="form-input field-wide">
                            <label htmlFor="expense-description">Description</label>
                            <input
                                id="expense-description"
                                name="description"
                                type="text"
                                placeholder="Description"
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                                autoFocus
                            />
                        </div>

                        <div className="form-input">
                            <label htmlFor="expense-amount">Expense Amount</label>
                            <input
                                id="expense-amount"
                                name="amount"
                                type="text"
                                placeholder="Amount"
                                value={this.state.amount}
                                onChange={this.onChangeAmount}

                            />
                        </div>

                        <div className="form-input">
                            <label htmlFor="form-datepicker">Date</label>
                            <DatePicker
                                id="form-datepicker"
                                selected={this.state.created}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>

                    <div className="form-input-group">
                    <div className="form-input field-wide">
                            <label htmlFor="expense-note">Note</label>
                        <textarea
                            id="expense-note"
                            placeholder="Note"
                            value={this.state.note}
                            onChange={this.onChangeNote}
                            name="note"
                        >
                        </textarea>
                    </div>
                    <div className="form-submit">
                        <button>{this.state.buttonText}</button>
                        </div>
                    </div>
                   
                </form>
            </>
        )
    }
}