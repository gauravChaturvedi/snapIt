import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App.jsx';
import Routes from './containers/Routes.jsx';
import Platform from './utils/Platform.js';

import './Main.scss';

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
    const logoSrc = 'liblogo.png';
    ReactDOM.render(
      <App>
        <div className="logo-header row col-12">
          <img src={logoSrc} />
        </div>
        <Routes/>
      </App>, document.getElementById('app')
    );
  }

};

app.initialize();
