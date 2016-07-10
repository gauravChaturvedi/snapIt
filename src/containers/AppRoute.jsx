import React, { Component, PropTypes } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Main from './Main.jsx';

class AppRoute extends Component {
  static propTypes = {
    stores: PropTypes.object,
    actions: PropTypes.object
  };
  constructor(...args) {
    super(...args);
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Main} />
      </Router>
    );
  }
}
export default connect(state => ({ stores: state }), dispatch => ({
  actions: {}
}))(AppRoute);
