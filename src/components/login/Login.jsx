import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import History from '../../utils/History.js';
import * as LoginActions from '../../actions/LoginActions';

export default class Login extends Component {
  static propTypes = {};

  constructor(props, context) {
    super(props, context);
  }

  authenticate() {
    const advisorId = this.refs.advisorId && this.refs.advisorId.value;
    const advisorPassword = this.refs.advisorPassword && this.refs.advisorPassword.value;
    if (advisorId && advisorPassword) {
      if ( advisorId === 'a' && advisorPassword === 'a') {
        this.props.LoginActions.loginSuccess();
        History.pushState({}, '/');
      } else {
        alert('Incorrect username/password, please try again !');
        this.refs.advisorId.value = '';
        this.refs.advisorPassword.value = '';
      }
    }
  }

  render() {
    return (
      <div>
        Advisor Id:<input ref="advisorId" type="text"></input>
        <br/><br/>
        Password:<input ref="advisorPassword" type="password"></input>
        <br/><br/>
        <button id="scanBtn" onClick={::this.authenticate}> Go!</button>
      </div>
    );
  }
}

export default connect(state => ({ loggedIn: state.loggedIn }), dispatch => ({
  LoginActions: bindActionCreators(LoginActions, dispatch)
}))(Login);
