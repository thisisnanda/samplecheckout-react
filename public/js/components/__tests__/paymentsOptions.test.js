import React from 'react';
import { mount } from 'enzyme';
import PaymentOptions from '../paymentOptions.es6'


describe('Test paymentOptions Component', () => {
    const props = {
        cardName: "Master",
        cardType: "Credit",
        cardNumber: "******12334",
        onRadioClick: jest.fn()
    }
    it('Should load the component paymentOptions', () => {
        const wrapperComponent = mount(<PaymentOptions {...props}/>);
        expect(wrapperComponent.find('input').length).toEqual(1);
    })

    it('Should call the event handler', () => {
        const wrapperComponent = mount(<PaymentOptions {...props}/>);
        wrapperComponent.find('input').simulate('click');
        const spy = jest.spyOn(props, 'onRadioClick');
        expect(spy).toHaveBeenCalled();
    })
})
