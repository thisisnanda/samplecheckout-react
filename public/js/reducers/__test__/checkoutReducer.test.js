import checkoutReducer from '../checkoutReducer.es6';

describe('Test reducer', () => {
    let state;

    it('with empty action object', () => {
        const newState = checkoutReducer(state, {});
        expect(newState.selectedPaymentMethod).toEqual({})
    })

    it('with type LOGIN_REQUEST', () => {
        state = {
            details: {},
            paymentMethods: [],
            selectedPaymentMethod: {},
            login: false
        }

        const action = {
            type: 'LOGIN_REQUEST',
            data: {
                login: true
            }
        }
        const newState = checkoutReducer(state, action);
        expect(newState.login).toEqual(true)
    })

    it('with type PAY_NOW', () => {
        const action = {
            type: 'PAY_NOW',
            data: {
                cardName: 'MasterCard'
            }
        }
        const newState = checkoutReducer(state, action);
        expect(newState.selectedPaymentMethod.cardName).toEqual('MasterCard');
    })
})
