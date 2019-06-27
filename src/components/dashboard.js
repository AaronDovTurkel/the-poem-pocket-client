import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchPoems} from '../actions/poems';

import EditForm  from './edit-form';
import PoemCreatorPage from './poem-creator-page';

import './dashboard.css';


export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchPoems());
    }

    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            idStore: null,
            selectedUserEdit: null,
            clickCount: 0
        };
        this.handler = this.handler.bind(this);

    }

    mobileDoubleClickTimer() {
        setTimeout(() => {
            if (this.state.clickCount >= 2) {
                this.clearCount();
                this.renderEditor(this.state.selectedUserEdit, this.state.idStore);
            } else {
                this.clearCount();
            }
        }, 300);
    }

    handleIncrement(stanzaText, idArg)  {
        this.setState({
             clickCount: this.state.clickCount + 1,
             selectedUserEdit: (stanzaText.target).nextSibling.innerText,
             idStore: idArg
            });
    }

    clearCount() {
        this.setState({
            clickCount: 0
        });
    }

    renderEditor(userArg) {
        if (this.props.username === userArg) {
            this.setState({
                editing: true
            });

        }
    }

    handler() {
        this.setState({
            editing: false
        })
    }

    renderResults() {

        
        const stanzaListItems = this.props.stanzas.map((stanzas, index) =>
        <tr key={index}>
            <td className="stanza-number">{index + 1}</td>
            <td className="stanza-text" onClick={(event) => {this.handleIncrement(event, stanzas[1]); this.mobileDoubleClickTimer()}}>{stanzas[0]}</td>
            <td className="stanza-author">{stanzas[2]}</td>
        </tr>
        );

        
        return stanzaListItems;
    }

    render() {
        if (this.props.loading === false) {
            return (
                <div className="dashboard"> 
                    {(!this.state.editing) ? <PoemCreatorPage poemTitle={this.props.title} poemStanzas={this.renderResults()}></PoemCreatorPage>  : <div className="editStanzaContainer"><EditForm handler = {this.handler} id={this.state.idStore}/><button className="cancelEditorButton" onClick={this.handler}>Cancel</button></div>}
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
