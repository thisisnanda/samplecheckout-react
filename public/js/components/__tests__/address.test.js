import React from 'react';
import Address from '../address.es6';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Button from '../button.es6'

describe('Address Component test', () => {

    const props = {
        fullName: "Kiran Kumar",
        address: "address1"
    }

    it('should load the component', () => {
        const addressComponent = shallow(<Address {...props}/>);
        expect(addressComponent.find('h2').text()).to.equal(props.fullName);
        expect(addressComponent.find(Button).length).to.equal(1);
    })
})
