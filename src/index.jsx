import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App.jsx';
import Routes from './containers/Routes.jsx';
import Platform from './utils/Platform.js';

import './Main.scss';
import logoPng from '../liblogo.png';

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
    ReactDOM.render(
      <App>
        <div className="logo-header row col-12">
          <img src={logoPng} />
        </div>
        <Routes/>
      </App>, document.getElementById('app')
    );
  }

};

app.initialize();
