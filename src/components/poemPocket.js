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
        const stanzaListItems = this.props.poems.map((poems, index) =>
            <li key={index}>
                <div>{poems}</div>
            </li>
        );

        
        return stanzaListItems;
    }


    render() {
        
        return (
            <div className="dashboard">
                <ul className="poemPocketContainer">
                    {this.renderResults()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        poems: state.poemPocket.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(PoemPocket));