import React, { Component, PropTypes } from 'react';
import Platform from '../../utils/Platform.js';
import Axios from 'axios';

import './IdScan.scss';

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

      // Send the captured image to OCR service
      const config = {
        headers: { 'Content-Type': 'multipart/form-data' }
      };

      let data = new FormData();
      data.append('advisorId', 1);
      data.append('documentType', 'ID');
      data.append('img', new Blob([path], { type: 'img' }));

      Axios.post('http://52.209.38.152/ocr/search', data, config)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });

      // SetState to show file on the app
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
      <div className="col-12 id-scan-container">
        { this.state.imgSrc ? <img className="id-image" src={this.state.imgSrc}></img> : null }
        <button id="imageBtn" onClick={::this.scanNow}> Scan ID Now!</button>
      </div>
    );
  }
}

