import React, {Component, PropTypes} from 'react';
import Drawer__ListItem from './Drawer__ListItem';
import listItems from '../list-items';

class Drawer__List extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul className="Drawer__List">
          {listItems.map((li, i) => {
              return <Drawer__ListItem key={i} {...li} {... this.props}/>
          })}
      </ul>
    );
  }
}

Drawer__List.propTypes = {
  callback: PropTypes.func
};
export default Drawer__List;
