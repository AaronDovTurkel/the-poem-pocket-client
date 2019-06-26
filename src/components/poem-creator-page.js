import React from 'react';
import {connect} from 'react-redux';
import AddForm from './add-form';

import './site-info.css';

export class PoemCreatorPage extends React.Component {
    render () {
        return (
            <div className="poem-creator-page">
                <h2 className="new-poem-title">{this.props.poemTitle}</h2>
                <table className="poem-stanza-list">
                    <thead>  
                        <tr>
                            <th>#</th>
                            <th>Stanza</th>
                            <th>Author</th>
                        </tr>
                    </thead> 
                    <tbody>
                        {this.props.poemStanzas}
                    </tbody>
                </table>
                <AddForm user={this.props.username}/>
            </div>
        );
    }
    
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    username: state.auth.currentUser.username
});

export default connect(mapStateToProps)(PoemCreatorPage);