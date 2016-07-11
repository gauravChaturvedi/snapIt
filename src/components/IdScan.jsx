import React, { Component, PropTypes } from 'react';
import Platform from '../utils/Platform.js';

export default class IdScan extends Component {
  static propTypes = {};

  constructor(props, context) {
    super(props, context);
    this.state = {
      imgSrc: ''
    };
  }

  onSuccess(mediaFiles) {
    let i, path, len;

    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
      path = mediaFiles[i].fullPath;
      alert('Your image is available at ' + path);
      this.setState({
        imgSrc: mediaFiles[i].fullPath
      });
      console.log(mediaFiles);
    }
  }

  onError(error) {
    if (navigator && navigator.notification) {
      navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    }
  }

  scanNow() {
    if (Platform.isCordova()) {
      const options = {
        limit: 1
      };

      if (navigator && navigator.device) {
        navigator.device.capture.captureImage(::this.onSuccess, ::this.onError, options);
      }
    }
  }

  render() {
    return (
      <div>
        <button id="imageBtn" onClick={::this.scanNow}> Scan ID Now!</button>
        { this.state.imgSrc ? <img className="id-image" src={this.state.imgSrc}></img> : null }
      </div>
    );
  }
}

