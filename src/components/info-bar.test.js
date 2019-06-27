import React from 'react';
import {shallow} from 'enzyme';

import InfoBar from './info-bar';

describe('<InfoBar />', () => {
    it('Renders without crashing', () => {
        shallow(<InfoBar />);
    });

    it('Renders with proper class', () => {
        const wrapper = shallow(<InfoBar />);
        expect(wrapper.hasClass('info-bar')).toBe(true);
    });

    it('Renders header even after click', () => {
        const wrapper = shallow(<InfoBar />);
        wrapper.simulate('click');
        expect(wrapper.hasClass('info-bar')).toBe(true);
    });

    it('Doesnt render childer without click', () => {
        const wrapper = shallow(<InfoBar />);
        expect(wrapper.find('ul').exists()).toBe(false);
    });

    it('Renders proper classes without click', () => {
        const wrapper = shallow(<InfoBar />);
        expect(wrapper.childAt(0).type()).toEqual('img');
        expect(wrapper.childAt(0).hasClass('profile_img_current')).toBe(true);
        expect(wrapper.childAt(0).hasClass('clicked')).toBe(false);
    });

    it('Renders proper classes after click', () => {
        const wrapper = shallow(<InfoBar />);
        wrapper.simulate('click');
        expect(wrapper.childAt(0).type()).toEqual('img');
        expect(wrapper.childAt(0).hasClass('clicked')).toBe(true);
    });

    it('Renders <ul> children classes after click', () => {
        const wrapper = shallow(<InfoBar />);
        wrapper.simulate('click');
        expect(wrapper.find('ul').exists()).toBe(true);
        expect(wrapper.find('ul').hasClass('info-bar-drop-down')).toBe(true);
    });

    it('Renders children after click', () => {
        const wrapper = shallow(<InfoBar />);
        wrapper.simulate('click');
        expect(wrapper.find('ul').childAt(0).type()).toEqual('li');
        expect(wrapper.find('ul').childAt(0).text()).toEqual('<Link />');
        expect(wrapper.find('ul').childAt(1).type()).toEqual('li');
        expect(wrapper.find('ul').childAt(1).text()).toEqual('<Link />');
        expect(wrapper.find('ul').childAt(2).type()).toEqual('li');
        expect(wrapper.find('ul').childAt(2).text()).toEqual('<Link />');
    });
});