import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, withRouter} from 'react-router-dom';

import HeaderBar from './header-bar';
import SiteInfo from './site-info';
import LandingPage from './landing-page';
import Dashboard from './dashboard';
import Profile from './profile';
import PoemPocket from './poemPocket';
import Connect from './connect';
import AdminPage from './adminPage';

import RegistrationPage from './registration-page';
import {refreshAuthToken} from '../actions/auth';

import './app.css';


export class App extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.loggedIn && this.props.loggedIn) {
            // When we are logged in, refresh the auth token periodically
            this.startPeriodicRefresh();
        } else if (prevProps.loggedIn && !this.props.loggedIn) {
            // Stop refreshing when we log out
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }

    render() {
        return (
            <div className="app">
                <header><HeaderBar /></header>
                <main>
                    <Route exact path="/" component={SiteInfo} />
                    <Route exact path="/landing" component={LandingPage} />
                    <Route exact path="/register" component={RegistrationPage} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/poemPocket" component={PoemPocket} />
                    <Route exact path="/connect" component={Connect} />
                    <Route exact path="/adminPage" component={AdminPage} />
                </main>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));
