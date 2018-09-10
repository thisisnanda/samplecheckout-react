import React from 'react';
import { connect } from 'react-redux';
import Login from './login.es6';
import { loginCheck } from '../actions/actions.es6';

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
        onLoginClick: (payload) => {
            dispatch(loginCheck(payload))
        }
    }
}

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Login);

export default connectedComponent;
