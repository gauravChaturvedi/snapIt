import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App.jsx';
import Routes from './containers/Routes.jsx';
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
  },

  initReactApp() {
    ReactDOM.render(<App><Routes/></App>, document.getElementById('app')
    );
  }

};

app.initialize();
