// Modules to control application life and create native browser window
// const {app, BrowserWindow} = require('electron')
// const path = require('path')
const { menubar } = require('menubar');

const mb = menubar();

mb.on('ready', () => {
  console.log('app is ready');
  // your app code here
});