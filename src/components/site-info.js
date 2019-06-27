import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './site-info.css';

export function SiteInfo(props) {

    return (
        <div className="site-info-container">
            <div className="info-content">
                <p>Hi! Welcome to "The Poetry Pocket".</p>
                <br></br>
                <p>This is a place for different communities to come togther and share ideas by creating a cohesive poem.</p>
                <br></br>
                <p>Every day a new poem title with an opening stanza will be posted. On a first-come-first-serve basis, anyone who wishes will have a chance to contribute a stanza to the public poem. The poem will close at midnight and be published to the public viewing board!</p>
                <br></br>
                <p>You can create an account and/or login if you are already a user. The profile image on the top right is your site guide. If you click on it a list of different pages will be display. In the current beta version you can: view old poems in "My Poem Pocket", view the current poem of the day and add your own stanza from the "Dashboard", you can "Log Out", or (if you are an administrator) add a new poem.</p>
                <br></br>
                <p>As a side note, if you are unhappy with the stanza you submitted; try double-clicking (or if you are on your phone, sliding) the stanza text...</p>
                <p>We hope you enjoy!</p>
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