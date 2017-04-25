import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Toolbar from './Toolbar';
import Drawer from './Drawer';
import {View1, View2, View3} from '../Views';
require('../../../static/styles/app.css');

export default class DrawerLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "isDrawerOpen": false
    };
    this.handleClick = this.handleClick.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }
  toggleDrawer(event) {
    this.setState({
      "isDrawerOpen": !this.state.isDrawerOpen
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
        <Toolbar title="React Starter Kit" onButtonClick={this.toggleDrawer} />
        <Router>
          <div className="container">

            <Drawer open={this.state.isDrawerOpen} callback={this.toggleDrawer} />

            <main className={this.state.isDrawerOpen
              ? "content toggled flex-center"
              : "content flex-center"} onClick={this.handleClick}>

              {this.props.children}

              <Route exact path="/react-starter-kit/" component={View1} />
              <Route path="/react-starter-kit/view2" component={View2} />
              <Route path="/react-starter-kit/view3" component={View3} />

            </main>
          </div>
        </Router>
      </div>
    );
  }
}
