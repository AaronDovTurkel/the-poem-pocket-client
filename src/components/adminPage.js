import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';

import AddPoem from './addPoem';

import './dashboard.css';

export class AdminPage extends React.Component {


    render() {
        if (this.props.loading === false) {
            return (
                <div className="adminPage">
                    <h3 className="pageHeader">Admin Page</h3>
                    <p>This page is only accessible to administrators.</p>
                    <AddPoem />
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

export default requiresLogin()(connect(mapStateToProps)(AdminPage));