import React, { Component, PropTypes } from 'react';
import Platform from '../../utils/Platform.js';

import './DocScan.scss';

export default class DocScan extends Component {
  static propTypes = {};

  constructor(props, context) {
    super(props, context);
  }

  onSuccess(mediaFiles) {
    let i, path, len;

    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
      path = mediaFiles[i].fullPath;
      alert('Your image is available at ' + path);
      console.log(mediaFiles);
    }
  }

  onError(error) {
    navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
  }

  scanNow() {
    if (Platform.isCordova()) {
      const options = {
        limit: 1
      };

      if (navigator && navigator.device) {
        navigator.device.capture.captureImage(this.onSuccess, this.onError, options);
      }
    }
  }

  render() {
    return (
      <div className="col-12 doc-scan-container">
        <button id="imageBtn" onClick={::this.scanNow}> Scan Doc Now!</button>
      </div>
    );
  }
}

