import React from 'react';
import CardDetails from './cardDetails.es6';
import Button from './button.es6';

class paymentOptions extends React.Component {
  constructor(props) {
    super(props);
  }


  /*handleRadio() {
      this.setState({
        display: !this.state.display
    });
  }*/
  render() {
    const button = false;
    return(
        <div className="paymentOptions">
            <div>
                <input type="radio" id={this.props.id} className="checkBoxOrButton radioBackground" onClick={this.props.onRadioClick} checked={this.props.display}/>
            </div>
            <div>
              Image
            </div>
            <div>
              <CardDetails cardName={this.props.cardName} cardType={this.props.cardType} cardNumber={this.props.cardNumber} display={this.props.display}/>
            </div>
        </div>
    )
  }
}

export default paymentOptions;
