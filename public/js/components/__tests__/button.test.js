import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Button from '../button.es6'

describe('Button Component test', () => {

    let props = {
        name: "Kiran Kumar",
        button: true
    }

    it('should load the component as Button', () => {
        const buttonWrapper = shallow(<Button {...props}/>);
        expect(buttonWrapper.find('button').text()).to.equal(props.name);
    })

    it('should load the component as link', () => {
        props.button = false;
        const buttonWrapper = shallow(<Button {...props}/>);
        expect(buttonWrapper.find('a').text()).to.equal(props.name);
    })
})
