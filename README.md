## Tools
* ES6 + some features from ES7
* React
* React router
* Webpack
* Server rendering
* Karma
* Eslint
* Style: Redium + SASS

## How to Install
1. Install dependencies: ```npm i```
2. Install global tools: ```npm install -g cordova```
3. Add your cordova platform by running ```cordova platform add %PLATFORM%``` (android and iOS)

## Usage
- ```npm run start``` - starts a server, with react model replacement and devtools.
- ```npm run build:prod``` - builds the project (single html file and single js file).
- ```cordova run android -s``` - Deploys the latest build onto connected Android device.