import React from 'react';
import Header from './header.es6';
import Success from './success.es6';
import Button from './button.es6';


const donePage = (props) => {
    const showDropDown = false;
    const button = true;
    return (
        <div className="donePage">
            <Header showDropDown={showDropDown}/>
            <Success />
            <div className="successBottomText">
                <p className="margingTop">Get you PayPal receipts in Messenger</p>
                <p className="margingTop bold"> Paid </p>
                <div className="paidDetails">
                    <p>{props.selectedPaymentMethod.cardName} {props.selectedPaymentMethod.cardNumber}</p>
                    <p>{props.amount}</p>
                </div>
                <div className="margingTop">
                    <h4>Shipped to</h4>
                    <p> {props.details.fullName} </p>
                    <p> {props.details.address} </p>
                </div>

                <div className="margingTop">
                    <h4>Purchase details</h4>
                    <p> Receipt number: 32h14jvfv2fr465643tt</p>
                    <p> We will send confirmation to you email</p>
                </div>

                <div className="margingTop">
                    <h4>Merchant details</h4>
                    <p> Smoky Mountain Pizza and pasta</p>
                    <p> vcMerchant@paypal.com</p>
                </div>
                <div className="margingTop">
                    <Button name="Return to Merchant" button={button} />
                </div>
            </div>
        </div>
    )
}

donePage.defaultProps = {
    cardName: "Visa",
    cardNumber: "*****1234",
    amount: '$50.00USD'
}

export default donePage;
