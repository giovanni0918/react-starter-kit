import React, {Component, PropTypes} from 'react';
import Drawer__List from './Drawer__List';

class Drawer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <aside className={this.props.open
          ? "nav-drawer open"
          : "nav-drawer"}>
          <nav>
              <Drawer__List {... this.props}/>
          </nav>
      </aside>
    );
  }
}
Drawer.propTypes = {
  open: PropTypes.bool
}
export default Drawer;
