/*
MIT License

Copyright (c) 2017 Giovanni Orlando

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/ 
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
