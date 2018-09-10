import React from 'react';
import Button from './button.es6';
import Header from './header.es6';
import DropDown from './dropDown.es6';
import ReviewConnected from './reviewConnected.es6';
import DoneConnected from './doneConnected.es6';

class login extends React.Component {

    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
        this.state = {
            email: "",
            password: ""
        }
    }

    handleEmail(e) {
        this.setState({
            email: e.target.value,
            password: this.state.password
        })
    }

    handlePassword(e) {
        this.setState({
            email: this.state.email,
            password: e.target.value
        })
    }
    clickHandler() {
        this.props.onLoginClick({
            "email": this.state.email,
            "password": this.state.password
        })
    }

    render() {
        const button = true;
        const link = false;

        if(this.props.login && Object.keys(this.props.selectedPaymentMethod).length > 0) {
            return (
                <DoneConnected />
            )
        } else if(this.props.login) {
            return (
                <ReviewConnected />
            )
        }
            return(
            <div className="login">
                <Header />
                <div className="margingTop">
                <span className="text">Pay with PayPal</span>
                    <DropDown values={["English", "French"]} className="colorText"/>
                </div>
                <div className="margingTop">
                    <input className="nemo_email" type="text" placeholder="Email" required onChange={this.handleEmail.bind(this)}/>
                </div>
                <div className="margingTop">
                    <input className="nemo_password" type="password" placeholder="Password" required onChange={this.handlePassword.bind(this)}/>
                </div>
                <div className="margingTop" onClick={this.clickHandler.bind(this)}>
                    <Button name="Log In to paypal" button={button} />
                </div>
                <div className="margingTop center">
                    <Button name="Forgot your password?" button={link} />
                </div>
            </div>
        )
    }
}

export default login;
