import React from 'react';
import { connect } from 'react-redux';
import DonePage from './donePage.es6';

const mapStateToProps = (state= {}) => {
    return {
        details: state.details,
        paymentMethods: state.paymentMethods,
        selectedPaymentMethod: state.selectedPaymentMethod,
        login: state.login
    };
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const doneComponent = connect(mapStateToProps, mapDispatchToProps)(DonePage);

export default doneComponent;
