import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './site-info.css';

export function SiteInfo(props) {

    return (
        <div className="site-info-container">
            <div className="info-content">
                <p>Hi! Welcome to "The Poetry Pocket".</p>
                <p>This is a place for different communities to come togther and share ideas by creating a cohesive poem.</p>
                <p>Every day a new poem title with an opening stanza will be posted.</p>
                <p>On a first-come-first-serve basis, anyone who wishes will have a chance to contribute a stanza to the public poem.</p>
                <p>The poem will close at a perscribed line number and be published to the public viewing board!</p>
            </div>
            <div className="register-link"><Link to="/register">Register Now!</Link></div>
            <div className="log-in-link">Already have an account? <Link to="/landing">Log In</Link></div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(SiteInfo);