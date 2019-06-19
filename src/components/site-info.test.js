import React from 'react';
import {shallow} from 'enzyme';

import {SiteInfo} from './site-info';

describe('<SiteInfo />', () => {
    
    it('Renders without crashing', () => {
        shallow(<SiteInfo />);
    });

    it('Renders with proper class', () => {
        const wrapper = shallow(<SiteInfo />);
        expect(wrapper.hasClass('site-info-container')).toBe(true);
    });

    it('Renders proper children', () => {
        const wrapper = shallow(<SiteInfo />);
        expect(wrapper.childAt(0).type()).toEqual('div');
        expect(wrapper.childAt(0).hasClass('info-content')).toBe(true);
        expect(wrapper.childAt(1).type()).toEqual('div');
        expect(wrapper.childAt(1).hasClass('register-link')).toBe(true);
        expect(wrapper.childAt(2).type()).toEqual('div');
        expect(wrapper.childAt(2).hasClass('log-in-link')).toBe(true);
    });

});