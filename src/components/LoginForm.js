import React from "react";
import { connect } from 'react-redux';
import { startLogin } from "../actions/firebase-auth";
export class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        let pe = props.expense;

        this.state = {
            username: pe ? pe.username : '',
            pw: pe ? pe.pw : '',
            buttonText: props.buttonText ? props.buttonText : 'Log In'
        };
    };

    onChangeUsername = (e) => {
        const newname = e.target.value;
        this.setState(() => ({
            username: newname
        }));
    };

    onChangePW = (e) => {
        const newPW = e.target.value;
        this.setState(() => ({
            pw: newPW
        }));
        console.log(this.state)
    };

    onPopLogin = () => {
        startLogin();
    };



    onSubmit = (e) => {
        e.preventDefault();
        // So some basic validation:
        if (!this.state.username.length || !this.state.pw.length) {
            // missing description or amount
            this.setState(() => ({
                errorMsg: 'Be better'
            }));

            // no errors: clear errors
        } else {
            this.setState(() => ({
                errorMsg: ''
            }));
            this.props.onSubmit({
                username: this.state.username,
                pw: this.state.pw
            });
            // console.log('onSubmit');
        }
    }

    render() {
        return (
            <>
                <h1>I be a login form!</h1>
                {this.state.errorMsg &&
                    <div className="pre-form-error-banner" role="alert" title="Expense was not submitted" key="errMsg1">
                        {this.state.errorMsg}
                    </div>
                }
                <form onSubmit={this.onSubmit} title="Edit An Expense Entry" >
                    <div className="form-input-group">
                        <div className="form-input">
                            <label htmlFor="login-username">Name</label>
                            <input
                                id="login-username"
                                name="username"
                                type="text"
                                placeholder="User Name"
                                value={this.state.username}
                                onChange={this.onChangeUsername}
                                autoFocus
                            />
                        </div>

                        <div className="form-input">
                            <label htmlFor="login-pw">PW</label>
                            <input
                                id="login-pw"
                                name="pw"
                                type="text"
                                placeholder=""
                                value={this.state.pw}
                                onChange={this.onChangePW}

                            />
                        </div>

                    </div>

                    <div className="form-input-group">

                        <div className="form-submit">
                            <button>{this.state.buttonText}</button>
                        </div>
                    </div>

                </form>
                <button onClick={this.onPopLogin}>Log in with Google</button>
            </>
        )
    }
};

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginForm);