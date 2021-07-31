// Modules to control application life and create native browser window
// const {app, BrowserWindow} = require('electron')
// const path = require('path')
const { menubar } = require('menubar');
const { globalShortcut, Menu } = require('electron')
const os = require('os');

const isMac = process.platform === 'darwin';
const appName = 'Code Kipper'

const mb = menubar({
  tooltip: appName, 
  browserWindow: { height: 500, width: 400 }, 
  showOnAllWorkspaces: true,
  //icon
});

const buildMenu = () => {
  const template = [
    {
      label: appName,
      submenu: [
        { role: 'about' },
        { type: 'separator' },
        { type: 'separator' },
        { role: 'hide' },
        { role: 'hideothers' },
        { role: 'unhide' },
        { type: 'separator' },
        { role: 'quit' }
      ],
    }, 
    {
      label: 'Actions',
      submenu: [
        { role: 'copy' }, 
        { role: 'paste' },
        { role: 'zoomIn' },
        { role: 'zoomOut' },
        { role: 'resetZoom' },
      ],
    }
  ];
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

mb.on('ready', () => {
  
  buildMenu();
  /* 
    Register keyboard shortcut to open or close application window 
  */
  const openShortcut = globalShortcut.register('Cmd+C+K', () => {
  mb._isVisible ? mb.hideWindow() : mb.showWindow()
  });


  /* 
    Code that executes when the browswer window is shown 
  */
  mb.on('after-show', () => {
  
  });

  /* 
    Code executes when browser window is hidden 
  */
  mb.on('after-hide', () => {
  
  });

  console.log('app is ready');
});

mb.on('after-create-window', () => {
  mb.window.loadURL('http://localhost:3000')
})