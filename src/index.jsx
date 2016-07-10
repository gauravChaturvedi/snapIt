import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App.jsx';
import AppRoute from './containers/AppRoute.jsx';
import Platform from './utils/Platform.js';

const app = {
  // Application Constructor
  // Separate concerns are inited separately:
  // React App, & Cordova Features
  initialize: function() {
    Platform.ready().then(() => {
      // One-time platform stuff
      // React App
      this.initReactApp();
    });
    this.bindEvents();
  },
  // Bind Event Listeners
  //
  // Bind any events that are required on startup. Common events are:
  // 'load', 'deviceready', 'offline', and 'online'.
  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  // deviceready Event Handler
  //
  // The scope of 'this' is the event. In order to call the 'receivedEvent'
  // function, we must explicitly call 'app.receivedEvent(...);'
  onDeviceReady: function() {
    app.receivedEvent('deviceready');
  },
  // Update DOM on a Received Event
  receivedEvent: function(id) {
    app.example();
  },

  example : function () {
    const cardIOResponseFields = [
      "cardType",
      "redactedCardNumber",
      "cardNumber",
      "expiryMonth",
      "expiryYear",
      "cvv",
      "postalCode"
    ];

    const onCardIOComplete = function(response) {
      let responseValues = '';
      console.log("card.io scan complete");
      for (let i = 0, len = cardIOResponseFields.length; i < len; i++) {
        const field = cardIOResponseFields[i];
        responseValues += field + ": " + response[field];
      }
      alert('These are the fields ' + responseValues);
    };

    const onCardIOCancel = function() {
      console.log("card.io scan cancelled");
    };

    const onCardIOCheck = function (canScan) {
      console.log("card.io canScan? " + canScan);
      const scanBtn = document.getElementById("scanBtn");
      if (!canScan) {
        scanBtn.innerHTML = "Manual entry";
      }
      scanBtn.onclick = function (e) {
        CardIO.scan({
            "requireExpiry": true,
            "requireCVV": false,
            "requirePostalCode": false,
            "hideCardIOLogo": true
          },
          onCardIOComplete,
          onCardIOCancel
        );
      }
    };

    CardIO.canScan(onCardIOCheck);
  },

  initReactApp() {
    ReactDOM.render(<App><AppRoute/></App>, document.getElementById('app')
    );
  }

};

app.initialize();
