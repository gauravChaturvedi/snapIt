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
    <div className="row menu-items">
      <MenuItem name="Search Client" route="/id-scan" iconClass="search-client"/>
      <MenuItem name="Capture proof of residence" route="/doc-scan" iconClass="residence-proof"/>
      <MenuItem name="Capture bank details" route="/bank-scan" iconClass="bank-details"/>
    </div>
    );
  }
}
