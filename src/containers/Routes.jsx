import React, { Component, PropTypes } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Main from './Main.jsx';
import BankScan from '../components/BankScan.jsx';
import DocScan from '../components/DocScan.jsx';
import IdScan from '../components/IdScan.jsx';

class Routes extends Component {
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
        <Route path="/bank-scan" component={BankScan} />
        <Route path="/doc-scan" component={DocScan} />
        <Route path="/id-scan" component={IdScan} />
      </Router>
    );
  }
}
export default connect(state => ({ stores: state }), dispatch => ({
  actions: {}
}))(Routes);
