// Modules to control application life and create native browser window
// const {app, BrowserWindow} = require('electron')
// const path = require('path')
//const axios  = require('axios');
const { menubar } = require('menubar');
const { globalShortcut, Menu, protocol, ipcMain } = require('electron')
const os = require('os');

const isMac = process.platform === 'darwin';
const appName = 'Code Kipper'


const mb = menubar({
  webSecurity: false,
  tooltip: appName, 
  browserWindow: { height: 500, width: 400 }, 
  showOnAllWorkspaces: true,
  //icon
});
const { session } = require('electron')
// Modify the user agent for all requests to the following urls.

// ipcMain.handle('auth', async (event, ...args) => {
//   console.log('main: auth', event, args)
//   const result = await axios.post(
//     'https://api.com/auth',
//     {
//       username: args[0].username,
//       password: args[0].password,
//       auth_type: args[1],
//     },
//   )
//   console.log('main: auth result', result)
//   console.log('main: auth result.data', result.data)
//   return result.data
// })

// ipcMain.handle('request', async (_, axios_request) => {
//   const result = await axios(axios_request)
//   return { data: result.data, status: result.status }
// })

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
        { role: 'toggleDevTools' }
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
  mb.window.webContents.userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:70.0) Gecko/20100101 Firefox/70.0";
})
