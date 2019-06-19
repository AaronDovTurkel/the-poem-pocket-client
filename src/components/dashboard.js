import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchPoems} from '../actions/poems';

import PoemCreatorPage from './poem-creator-page';

import './dashboard.css';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchPoems());
    }

    renderResults() {
        const stanzaListItems = this.props.stanzas.map((stanzas, index) =>
            <li key={index}><p className="stanza-number">{index + 1}</p><p className="stanza-text">{stanzas[0]}</p><p className="stanza-author">by: {stanzas[2]}</p></li>
        );

        
        return stanzaListItems;
    }


    render() {
        if (this.props.loading === false) {
            return (
                <div className="dashboard">
                    <PoemCreatorPage poemTitle={this.props.title} poemStanzas={this.renderResults()}></PoemCreatorPage>
                </div>
            );
        } else {
            return (
                <div className="dashboard">
                    Loading ...
                </div>
            );
        }
        
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        title: state.poems.data.title,
        stanzas: state.poems.data.stanzas,
        loading: state.addStanza.loading
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
