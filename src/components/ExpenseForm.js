import React from "react";

export default class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: ''
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
                        type="number"
                        placeholder="Amount"
                    />
                    <textarea
                        placeholder="Note"
                        value={this.state.note}
                        onChange={this.onChangeNote}
                        >
                    </textarea>
                    <button>Add/Update Expense</button>
                </form>
            </>
        )
    }
}