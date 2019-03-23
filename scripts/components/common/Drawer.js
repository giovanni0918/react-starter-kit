/*
MIT License

Copyright (c) 2019 Giovanni Orlando

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

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // ES6
import listItems from '../../list-items.js';

const Drawer = ({ callback, open }) => (
    <aside className={open ? 'nav-drawer open' : 'nav-drawer'}>
        <nav>
            <ul className="Drawer__List">
                {listItems.map((li, i) => (
                    <li key={i} className="Drawer__ListItem">
                        <Link to={li.href} onClick={callback}>
                            <span className="ListItem__emoji">{li.emoji}</span>
                            <span className="ListItem__title">{li.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    </aside>
);

Drawer.propTypes = {
    callback: PropTypes.func.isRequired,
    emoji: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
};

export default Drawer;
