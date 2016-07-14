import React, { Component, PropTypes } from 'react';
import History from '../../utils/History.js';

import './MenuItem.scss';

export default class MenuItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
    iconClass: PropTypes.string.isRequired
  };

  constructor(props, context) {
    super(props, context);
  }

  onClick() {
    History.pushState({}, this.props.route);
  }

  render() {
    const { name, route, iconClass } = this.props;
    console.log('These are the props', name, route, iconClass);
    return (
    <div className="menu-item col-12" onClick={::this.onClick}>
      { name }
    </div>
    );
  }
}
