import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';

import './dashboard.css';

export class Profile extends React.Component {


    render() {
        if (!this.props.loading) {
            return (
                <div className="profilePage">
                    <h2 className="pageHeader">Profile</h2>
                   <div className="betaAlertPage"><p>We're sorry but this app is still in its beta version.</p><p>The "Profile" functionality will allow you to view and edit your profile info.</p></div>
                </div>
            );
        } else {
            return (
                <div className="profilePage">
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

export default requiresLogin()(connect(mapStateToProps)(Profile));