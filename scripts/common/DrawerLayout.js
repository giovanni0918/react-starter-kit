import React, {Component, PropTypes} from 'react';
import Toolbar from './Toolbar';
import Drawer from './Drawer';
require('../../static/styles/app.css');

export default class DrawerLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isDrawerOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }
  toggleDrawer(event) {
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
        <Toolbar title="React Starter Kit" onButtonClick={this.toggleDrawer} />
        <div className="container">
          <Drawer open={this.state.isDrawerOpen} callback={this.toggleDrawer}></Drawer>
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
