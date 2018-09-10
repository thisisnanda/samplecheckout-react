import React from 'react';
import { connect } from 'react-redux';
import Review from './Review.es6';
import { payNow } from '../actions/actions.es6';

const mapStateToProps = (state= {}) => {
    return {
        details: state.details,
        paymentMethods: state.paymentMethods,
        selectedPaymentMethod: state.selectedPaymentMethod,
        login: state.login
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onPayNow: (payload) => {
            dispatch(payNow(payload))
        }
    }
}

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Review);

export default connectedComponent;
