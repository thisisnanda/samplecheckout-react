import React from 'react';
import { mount } from 'enzyme';
import Review from '../review.es6';
import PaymentOptions from '../paymentOptions.es6';

describe('Test review component', () => {
    const props = {
        details: {
            name: "Ashok",
            fullName: "Ashok kumar",
            address: "Address1"
        },
        paymentMethods: [
            {
                cardName: "MasterCard",
                cardType: "credit",
                cardNumber: "****1234",
                display: false
            },
            {
                cardName: "Visa",
                cardType: "debit",
                cardNumber: "****5674",
                display: false
            },
            {
                cardName: "PayPal",
                cardType: "credit",
                cardNumber: "****9994",
                display: false
            }
        ],
        onPayNow: jest.fn()
    }

    it('Should load the component', () => {
        const wrapperComponent = mount(<Review {...props} />);
        expect(wrapperComponent.find(PaymentOptions).length).toEqual(3);
    })

    it('Should handle click on paynow button',() => {
        const wrapperComponent = mount(<Review {...props} />);
        wrapperComponent.find('div.payNowDiv').children().simulate('click');
        const spy = jest.spyOn(props, 'onPayNow');
        expect(spy).toHaveBeenCalledWith({});
    })
})
