import React from 'react';
import Button from './button.es6';

const success = (props) => {
    const button = false;
    return (
        <div className="success">
        <p>Image</p>
        <div>You paid <span className="bold">{props.amount}</span> </div>
    <p>to Smoky Mountain Pizza & Pasta</p>
    <Button name="Details" button={button} />
        </div>
    )
}

success.defaultProps = {
    amount: "$50.00 USD"
}

export default success;
