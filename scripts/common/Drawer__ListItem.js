import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class Drawer__ListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li className="Drawer__ListItem">
          <Link to={this.props.href} onClick={this.props.callback}>
              <span className="ListItem__emoji">{this.props.emoji}</span>
              <span className="ListItem__title">{this.props.title}</span>
          </Link>
      </li>
    );
  }
}

Drawer__ListItem.propTypes = {
  href: PropTypes.string,
  callback: PropTypes.func,
  emoji: PropTypes.string,
  title: PropTypes.string
};
export default Drawer__ListItem;
