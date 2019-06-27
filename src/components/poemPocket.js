import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchPoemPocket} from '../actions/poemPocket';


import './dashboard.css';

export class PoemPocket extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchPoemPocket());
    }

    renderResults() {
        const poemPocketList = this.props.poemList.slice(0).reverse().map((poem, index) => {
            function renderStanzas() {
                const stanzaListItems = poem.stanzas.map((stanza, indexTwo) => 
               
                    <tr key={indexTwo}>
                        <td>
                            {indexTwo + 1}
                        </td>
                        <td>
                            {stanza.stanza}
                        </td>
                        <td>
                            {stanza.author}
                        </td>
                    </tr>
                )
                return stanzaListItems
            };

            return (
                <li className="poemPocketListItem" key={index}>
                    <h3 className="poemPocketListTitle">{poem.title}</h3>
                    <table className="poemPocketListTable">  
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Stanza</th>
                                <th>Author</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderStanzas()}
                        </tbody>
                    </table>
                    <div> Published on {poem.date.substr(0, 10)}</div>
                </li>
            )
        });
        return poemPocketList;
    }


    render() {
        if (this.props.loading === false) {
            return (
                <div className="poemPocketPageContainer">
                    <h3 className="pageHeader">My Poem Pocket</h3>
                    <ul className="poemPocketListContainer">
                        {this.renderResults()}
                    </ul>
                </div>      
            );
        } else {
            return (
                <div className="poemPocketPageContainer">
                    Loading ...
                </div>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        poemList: state.poemPocket.data,
        loading: state.poemPocket.loading
    };
};

export default requiresLogin()(connect(mapStateToProps)(PoemPocket));