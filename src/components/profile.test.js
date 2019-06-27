import React from 'react';
import {shallow} from 'enzyme';

import {Profile} from './profile';

describe('<Profile />', () => {
    
    it('Renders without crashing', () => {
        shallow(<Profile />);
    });

    it('Renders with proper class', () => {
        const wrapper = shallow(<Profile />);
        expect(wrapper.hasClass('profilePage')).toBe(true);
    });

    it('Renders proper children', () => {
        const wrapper = shallow(<Profile />);
        expect(wrapper.childAt(0).type()).toEqual('h2');
        expect(wrapper.childAt(0).hasClass('pageHeader')).toBe(true);
        expect(wrapper.childAt(1).type()).toEqual('div');
        expect(wrapper.childAt(1).hasClass('betaAlertPage')).toBe(true);
    });

});