import React from 'react';
import {Link}  from 'react-router-dom';



export default class InfoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }

    }


    setEditing(editing) {
        this.setState({
            editing
        });
    }


    render() {
        if (!this.state.editing) {
            return (
                <div className="info-bar"
                onClick={() => this.setEditing(true)}>
                    <img className="profile_img_current" src="https://png.pngtree.com/svg/20160307/52c66f1f8b.png" alt="No Img" />
                </div>
            );
        }

        if (this.props.admin === 'admin') {
            return (
                <div className="info-bar">
                    <img onClick={() => this.setEditing(false)} className="profile_img_current clicked" src="https://png.pngtree.com/svg/20160307/52c66f1f8b.png" alt="No Img" />
                    <ul className="info-bar-drop-down">
                        <li className="list-item profile"><Link to="/profile" onClick={() => this.setEditing(false)}>Profile</Link></li>
                        <li className="list-item dashboardListItem"><Link to="/dashboard" onClick={() => this.setEditing(false)}>Dashboard</Link></li>
                        <li className="list-item my-poem-pocket"><Link to="/poemPocket" onClick={() => this.setEditing(false)}>Poem Pocket</Link></li>
                        <li className="list-item connect"><Link to="/connect" onClick={() => this.setEditing(false)}>Connect</Link></li>
                        <li className="list-item adminPageListItem"><Link to="/adminPage" onClick={() => this.setEditing(false)}>Admin Page</Link></li>
                        {this.props.logOut}
                    </ul>
                </div>
            );
        }

        return (
            <div className="info-bar">
                <img onClick={() => this.setEditing(false)} className="profile_img_current clicked" src="https://png.pngtree.com/svg/20160307/52c66f1f8b.png" alt="No Img" />
                <ul className="info-bar-drop-down">
                    <li className="list-item profile"><Link to="/profile" onClick={() => this.setEditing(false)}>Profile</Link></li>
                    <li className="list-item dashboardListItem"><Link to="/dashboard" onClick={() => this.setEditing(false)}>Dashboard</Link></li>
                    <li className="list-item my-poem-pocket"><Link to="/poemPocket" onClick={() => this.setEditing(false)}>Poem Pocket</Link></li>
                    <li className="list-item connect"><Link to="/connect" onClick={() => this.setEditing(false)}>Connect</Link></li>
                    {this.props.logOut}
                </ul>
            </div>
        );
    }
}