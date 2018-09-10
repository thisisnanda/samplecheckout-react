import React from 'react';
import Credit from '../credit.es6';
import { expect } from 'chai';
import { shallow } from 'enzyme';

describe('Test Credit component', () => {
    it('test', () => {
        const wrapperComponent = shallow(<Credit />);
        expect(wrapperComponent.find('p').length).to.equal(4);
    })
})
