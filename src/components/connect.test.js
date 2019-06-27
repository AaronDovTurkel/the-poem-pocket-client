import React from 'react';
import {shallow} from 'enzyme';

import {Connect} from './connect';

describe('<Connect />', () => {
    
    it('Renders without crashing', () => {
        shallow(<Connect />);
    });

    it('Renders with proper class', () => {
        const wrapper = shallow(<Connect />);
        expect(wrapper.hasClass('connectPage')).toBe(true);
    });

    it('Renders proper children', () => {
        const wrapper = shallow(<Connect />);
        expect(wrapper.childAt(0).type()).toEqual('h3');
        expect(wrapper.childAt(0).hasClass('pageHeader')).toBe(true);
        expect(wrapper.childAt(1).type()).toEqual('div');
        expect(wrapper.childAt(1).hasClass('betaAlertPage')).toBe(true);
    });

});