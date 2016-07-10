import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

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
    alert('Clicked on the menu item brio deoude buddy');
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
