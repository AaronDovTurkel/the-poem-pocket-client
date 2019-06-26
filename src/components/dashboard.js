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
            idStore: null
        };
        this.handler = this.handler.bind(this);

    }

    handler() {
        this.setState({
            editing: false
        })
      }

    setEditing(editing) {
        this.setState({
            editing
        });
    }

    setIdStore(idArg) {
        this.setState({
            idStore: idArg
        });
    }

    onHold(eventArg, idArg) {
        if (this.props.username === (eventArg.target).nextSibling.innerText) {
            this.setEditing(true);
            this.setIdStore(idArg);
            console.log(`this worked`);

        } else {
            console.log(`this didn't match`);
        }
    }

    renderResults() {

        
        const stanzaListItems = this.props.stanzas.map((stanzas, index) =>
        <tr key={index}>
            <td className="stanza-number">{index + 1}</td>
            <td className="stanza-text" onMouseUp={(event) => this.onHold(event, stanzas[1])}>{stanzas[0]}</td>
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
