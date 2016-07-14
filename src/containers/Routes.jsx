import React, { Component, PropTypes } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import store from '../store/configureStore.js';
import History from '../utils/History.js';

import Main from './Main.jsx';
import BankScan from '../components/bankscan/BankScan.jsx';
import DocScan from '../components/docscan/DocScan.jsx';
import IdScan from '../components/idscan/IdScan.jsx';
import Login from '../components/login/Login.jsx';

class Routes extends Component {
  static propTypes = {
    store: PropTypes.object,
    actions: PropTypes.object
  };
  constructor(...args) {
    super(...args);
  }

  gate() {
    const { store } = this.props;
    if (store.LoginReducer && !store.LoginReducer.loggedIn) {
      History.pushState({}, '/login');
    }
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Main} onEnter={::this.gate} />
        <Route path="/login" component={Login} onEnter={::this.gate} />
        <Route path="/bank-scan" component={BankScan} onEnter={::this.gate} />
        <Route path="/doc-scan" component={DocScan} onEnter={::this.gate} />
        <Route path="/id-scan" component={IdScan} onEnter={::this.gate} />
      </Router>
    );
  }
}
export default connect(state => ({ store: state }), dispatch => ({
  actions: {}
}))(Routes);
