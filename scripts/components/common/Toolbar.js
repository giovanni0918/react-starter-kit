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

import PropTypes from 'prop-types'; // ES6
import React from 'react';

const Toolbar = ({ onButtonClick, title }) => (
    <header className="App__Toolbar ">
        <button className="toggle-btn" onClick={onButtonClick}>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
        </button>
        <span className="brand-name">{title}</span>
    </header>
);

Toolbar.propTypes = {
    onButtonClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
};

export default Toolbar;
