import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import MenuItem from './MenuItem.jsx';

export default class MainMenu extends Component {
  static propTypes = {};

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <ul>
        <MenuItem name="Search Client" route="/" iconClass="search-client"/>
        <MenuItem name="Capture proof of residence" route="/" iconClass="residence-proof"/>
        <MenuItem name="Capture bank details" route="/" iconClass="bank-details"/>
        <button id="scanBtn"> Scan Now!</button>
      </ul>
    );
  }
}
