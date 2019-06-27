import React from 'react';
import {shallow} from 'enzyme';

import {PoemCreatorPage} from './poem-creator-page';


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
        <tr key={index}><td className="stanza-number">{index + 1}.</td><td className="stanza-text">{stanzas.stanza}</td><td className="stanza-author">{stanzas.author}</td></tr>);;
        const wrapper = shallow(
            <PoemCreatorPage poemTitle="Test Title One" poemStanzas={stanzaList} dispatch={dispatch} />
        );
        expect(wrapper.contains(<table className="poem-stanza-list"><thead><tr><th>#</th><th>Stanza</th><th>Author</th></tr></thead><tbody>{stanzaList}</tbody></table>)).toEqual(true);
    });
});