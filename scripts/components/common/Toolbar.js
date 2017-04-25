import React, {Component} from 'react';
import PropTypes from 'prop-types'; // ES6

const Toolbar = ({ onButtonClick, title }) => (
  <header className="App__Toolbar ">
    <button className="toggle-btn" onClick={onButtonClick}>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
    </button>
    <span className="brand-name">{title}</span>
  </header>
);

Toolbar.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default Toolbar;