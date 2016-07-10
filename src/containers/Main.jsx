import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MainMenu from '../components/MainMenu.jsx';

export class Main extends Component {
  render() {
    return (
      <div>
        <MainMenu />
      </div>
    );
  }
}

export default connect(state => ({}), dispatch => ({}))(Main);
