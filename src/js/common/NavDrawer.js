import React from 'react';
import NavDrawer__List from './NavDrawer__List';
require('../../css/nav-drawer.css');

export default class NavDrawer extends React.Component {

    constructor(props) {
        super(props);
        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.state = {
            open: false
        };
    }

    toggleDrawer(event) {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        return (
            <aside className={this.state.open
                ? "nav-drawer open"
                : "nav-drawer"}>
                <nav>
                    <NavDrawer__List {... this}/>
                </nav>
            </aside>
        );
    }
}
