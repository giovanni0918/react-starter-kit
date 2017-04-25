import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // ES6
import listItems from '../../list-items.js';

const Drawer = ({ callback, open }) => (
  <aside className={open ? "nav-drawer open" : "nav-drawer"}>
    <nav>
      <ul className="Drawer__List">
        {
          listItems.map((li, i) => (
            <li key={i} className="Drawer__ListItem">
              <Link to={li.href} onClick={callback}>
                <span className="ListItem__emoji">{li.emoji}</span>
                <span className="ListItem__title">{li.title}</span>
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  </aside>
);

Drawer.propTypes = {
  "callback": PropTypes.func.isRequired,
  "emoji": PropTypes.string.isRequired,
  "href": PropTypes.string.isRequired,
  "open": PropTypes.bool.isRequired,
  "title": PropTypes.string.isRequired
};

export default Drawer;