const isPlatformCordova = !!window.cordova; // todo: is there a better approach?

const cordovaInitPromise = new Promise((resolve, reject) => {
  // Expecting Cordova to have initialised in 10 seconds at-most,
  // Reject otherwise
  const timer = setTimeout(() => {
    reject({
      error: 'Cordova Not initialised'
    });
  }, 5000);

  if (!isPlatformCordova) {
    clearTimeout(timer);
    resolve(true);
  }

  document.addEventListener('deviceready', function deviceReady() {
    clearTimeout(timer);
    resolve(true);
  });
});

const windowLoadPromise = new Promise((resolve) => {
  window.addEventListener('load', function windowLoad() {
    resolve(true);
  });
});

export default class Platform {
  static ready() {
    return cordovaInitPromise;
  }
  static load() {
    return windowLoadPromise;
  }
  static isCordova() {
    return isPlatformCordova;
  }
  static isIOS() {
    return window.device && device.platform === 'iOS'; // using cordova device plugin
  }
  static isAndroid() {
    return window.device && device.platform === 'Android'; // using cordova device plugin
  }
}
