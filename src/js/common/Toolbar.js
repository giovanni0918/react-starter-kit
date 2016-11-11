import React from 'react';
require('../../css/toolbar.css');

export default class Toolbar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="App__Toolbar ">
                <button className="toggle-btn" onClick={this.props.onButtonClick}>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <span className="brand-name">{this.props.title}</span>
            </header>
        );
    }
}
