import React from 'react';
import {connect} from 'react-redux';
import {Link}  from 'react-router-dom';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

import InfoBar from './info-bar';

import './header-bar.css';

export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        // Only render the log out button if we are logged in
        
        let logOutButton = (
            <button className="list-item" onClick={() => this.logOut()}>Log out</button>
        );
        if (!(this.props.loggedIn)) {
            return (
                <div className="header-bar">
                    <Link to="/">The Poetry Pocket</Link>
                </div>
            );
        }
        return (
            <div className="header-bar">
                <Link to="/">The Poetry Pocket</Link>
                <InfoBar admin={this.props.username.username} logOut={logOutButton}></InfoBar>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    username: state.auth.currentUser,
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
