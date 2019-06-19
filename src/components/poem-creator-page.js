import React from 'react';
import {connect} from 'react-redux';
import AddForm from './add-form';

import './site-info.css';

export class PoemCreatorPage extends React.Component {
    render () {
        return (
            <div className="poem-creator-page">
                <h2 className="new-poem-title">{this.props.poemTitle}</h2>
                <ul className="poem-stanza-list">
                    {this.props.poemStanzas}
                </ul>
                <AddForm/>
            </div>
        );
    }
    
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(PoemCreatorPage);