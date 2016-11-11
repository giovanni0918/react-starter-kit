import React from 'react';
import {Link} from 'react-router';
require('../../css/nav-drawer__list-item.css');

export default class NavDrawer__ListItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="nav-drawer__list-item">
                <Link to={this.props.href} onClick={this.props.callback}>
                    <span className="ListItem__emoji">{this.props.emoji}</span>
                    <span className="ListItem__title">{this.props.title}</span>
                </Link>
            </li>
        );
    }
}
