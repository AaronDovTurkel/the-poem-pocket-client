import React from 'react';
import {shallow} from 'enzyme';

import {PoemCreatorPage} from './poem-creator-page';
import requiresLogin from './requires-login';
import {fetchPoems} from '../actions/poems';


describe('<PoemCreatorPage/>', () => {
    let seedLists = [];
    beforeAll(() => {
        for (let i=0; i<10; i++) {
            seedLists.push({
                stanza: `Test Stanza ${i}`,
                author: `Test Author ${i}`
            })
        }
    });

    it('Renders without crashing', () => {
        const dispatch = jest.fn();
        shallow(<PoemCreatorPage poemTitle="Test Title One" poemStanzas="Test Stanza One" dispatch={dispatch} />);
    });

    it('Renders the title', () => {
        const dispatch = jest.fn();
        const title = "Foo";
        const wrapper = shallow(
            <PoemCreatorPage poemTitle={title} poemStanzas={[]} dispatch={dispatch} />
        );
        expect(wrapper.contains(<h2 className="new-poem-title">{title}</h2>)).toEqual(true);
    });

    it('Renders the title', () => {
        const dispatch = jest.fn();
        const stanzaList = seedLists.map((stanzas, index) =>
        <li key={index}><p className="stanza-number">{index + 1}.</p><p className="stanza-text">{stanzas.stanza}</p><p className="stanza-author">by: {stanzas.author}</p></li>);;
        const wrapper = shallow(
            <PoemCreatorPage poemTitle="Test Title One" poemStanzas={stanzaList} dispatch={dispatch} />
        );
        expect(wrapper.contains(<ul className="poem-stanza-list">{stanzaList}</ul>)).toEqual(true);
    });
});