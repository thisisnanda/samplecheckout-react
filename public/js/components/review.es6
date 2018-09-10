import React from 'react';
import Address from './address.es6';
import PaymentOptions from './paymentOptions.es6';
import Button from './button.es6';
import Header from './header.es6';
import Credit from './credit.es6';

class review extends React.Component{
  constructor(props) {
    super(props)
      this.state = {
          paymentMethods: this.props.paymentMethods
      }
  }

    radioClickHandler(e) {
      let paymentMethods = this.state.paymentMethods;
      for(let i=0; i< paymentMethods.length; i++) {
            if(i == e.currentTarget.getAttribute("id")) {
                paymentMethods[i].display = !paymentMethods[i].display;
            } else {
                paymentMethods[i].display = false;
            }
      }
      this.setState({
          paymentMethods: paymentMethods
      });
  }

    buttonClickHandler() {
        let selectedObject = {};
        for(let i=0; i<this.state.paymentMethods.length; i++) {
            if(this.state.paymentMethods[i].display) {
                selectedObject = this.state.paymentMethods[i]
            }
        }

        this.props.onPayNow(selectedObject);
    }

  render() {
    const button = false;
    return (
      <div className="review">
        <Header />
        Hi, <span>{this.props.details.name}</span>!
        <Address fullName={this.props.details.fullNAme} address={this.props.details.address}/>
        <div className="margingTop payManage">
          <p>Pay With</p>
          <Button name="Manage >" button={button} />
        </div>
        <div className="borderBottom margingBottom">
            {this.state.paymentMethods.map((method, index) => <PaymentOptions cardName={method.cardName} cardType={method.cardType} cardNumber={method.cardNumber} id={index} display={method.display} onRadioClick={this.radioClickHandler.bind(this)}/>)}
              <div className="margingTop">
                <span className="plus colorText"> + </span><Button name="Add a debit or credit card" button={button} />
              </div>
        </div>
        <Credit />
        <p className="margingTop">View <Button name="paypal policies" button={button}></Button> and payment method rights</p>
        <div className="margingTop payNowDiv" onClick={this.buttonClickHandler.bind(this)}>
          <Button name="Pay now" button={!button} />
        </div>
        <p className="margingTop"> This transaction will appear on your statement as paypal*</p>
      </div>
    )
  }
}

review.defaultProps = {
    details: {
        name: "",
        fullName: "",
        address: ""
    },
  paymentMethods: [
    {
      cardName: "MasterCard",
      cardType: "credit",
      cardNumber: "****1234",
      display: false
    },
    {
      cardName: "MasterCard",
      cardType: "credit",
      cardNumber: "****1234",
      display: false
    },
    {
      cardName: "MasterCard",
      cardType: "credit",
      cardNumber: "****1234",
      display: false
    }
  ]
}

export default review;
