import React, { Component, PropTypes } from 'react';

import MenuItem from './MenuItem.jsx';
import './MainMenu.scss';

export default class MainMenu extends Component {
  static propTypes = {};

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <ul className="menu-items">
        <MenuItem name="Search Client" route="/" iconClass="search-client"/>
        <MenuItem name="Capture proof of residence" route="/" iconClass="residence-proof"/>
        <MenuItem name="Capture bank details" route="/bank-scan" iconClass="bank-details"/>
      </ul>
    );
  }
}
