import React from 'react';
import Toolbar from './Toolbar';
import NavDrawer from './NavDrawer';
require('../../static/styles/app.css');

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isDrawerOpen: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.toggleDrawer = this.toggleDrawer.bind(this);
    }
    toggleDrawer(event) {
        const drawer = this.refs.navigationDrawer;
        drawer.toggleDrawer();
        this.setState({
            isDrawerOpen: !this.state.isDrawerOpen
        });
    }
    handleClick(event) {
        if (this.state.isDrawerOpen) {
            this.toggleDrawer();
        }
    }
    render() {
        return (
            <div>
                <Toolbar title="React Starter Kit" onButtonClick={this.toggleDrawer}/>
                <div className="container">
                    <NavDrawer ref="navigationDrawer"/>
                    <main className={this.state.isDrawerOpen
                        ? "content toggled flex-center"
                        : "content flex-center"} onClick={this.handleClick}>
                        {this.props.children}
                    </main>
                </div>
            </div>
        );
    }
}
