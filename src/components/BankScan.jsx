import React, { Component, PropTypes } from 'react';
import Platform from '../utils/Platform.js';

const cardIOResponseFields = [
  "cardType",
  "redactedCardNumber",
  "cardNumber",
  "expiryMonth",
  "expiryYear",
  "cvv",
  "postalCode"
];

export default class BankScan extends Component {
  static propTypes = {};

  constructor(props, context) {
    super(props, context);
  }

  onCardIOComplete = function(response) {
    let responseValues = '';
    console.log("card.io scan complete");
    for (let i = 0, len = cardIOResponseFields.length; i < len; i++) {
      const field = cardIOResponseFields[i];
      responseValues += field + ": " + response[field];
    }
    alert('These are the fields ' + responseValues);
  };

  onCardIOCancel = function() {
    console.log("card.io scan cancelled");
  };

  scanNow() {
    if (Platform.isCordova()) {
      CardIO.scan({
          "requireExpiry": true,
          "requireCVV": false,
          "requirePostalCode": false,
          "hideCardIOLogo": true
        },
        this.onCardIOComplete,
        this.onCardIOCancel
      );
    }
  }

  render() {
    return (
      <div>
        <button id="scanBtn" onClick={::this.scanNow}> Scan Now!</button>
      </div>
    );
  }
}
