const getInitialState = () => {
    return {
        details: {},
        paymentMethods: [],
        selectedPaymentMethod: {},
        login: false
    }
}

const checkoutReducer = (state, action) => {
    state = state || getInitialState();
    if(action.type === 'LOGIN_REQUEST') {
        return {...state, ...action.data};
    } else if(action.type === 'PAY_NOW') {
        return {...state, selectedPaymentMethod: action.data};
    }
    return state;
}

export default checkoutReducer;
