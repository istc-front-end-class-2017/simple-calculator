const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let window;

function createWindow () {
  window = new BrowserWindow({width: 800, height: 600})

//   and load the index.html of the app.
//   window.loadURL(url.format({
//     pathname: path.join(__dirname+'build', 'index.html'),
//     protocol: 'file:',
//     slashes: true
//   }));

  window.loadURL('http://localhost:3000');

  window.webContents.openDevTools();

  window.on('closed', () => {
    window = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', () => {
  if (window === null) {
    createWindow()
  }
})