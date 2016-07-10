import React, { Component, PropTypes } from 'react';
import History from '../../utils/History.js';

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
    console.log('This is the route', this.props.route);
    History.pushState({}, this.props.route);
  }

  render() {
    const { name, route, iconClass } = this.props;
    console.log('These are the props', name, route, iconClass);
    return (
      <li onClick={::this.onClick}>
        { name }
      </li>
    );
  }
}
