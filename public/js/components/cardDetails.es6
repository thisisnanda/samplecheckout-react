import React from 'react';

class cardDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cardDetails">
        <div>{this.props.cardName}</div>
        <div><span>{this.props.cardType}</span>{this.props.cardNumber}</div>
        {this.props.display && <div className="margingTop">
          <input type="checkbox" className="checkBoxOrButton" /> <span>Make this card my preffered way of payment</span>
        </div> }
      </div>
    )
  }
}

cardDetails.defaultProps = {
  cardName: "MasterCard",
  cardType: "credit",
  cardNumber: "****1234",
  display: false
}

export default cardDetails;
