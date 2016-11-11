import React from 'react';
import NavDrawer__ListItem from './NavDrawer__ListItem';
import listItems from '../list-items';

export default class NavDrawer__List extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className="nav-drawer__list">
                {listItems.map((li, i) => {
                    return <NavDrawer__ListItem key={i} {...li} callback={this.props.toggleDrawer}/>
                })}
            </ul>
        );
    }
}
