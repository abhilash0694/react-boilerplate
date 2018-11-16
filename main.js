const electron = require('electron');
const server=require('./server/server');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

app.on('window-all-closed', function () {
    if (process.platform != 'darwin') {
        app.quit();
    }
})
let mainWindow;
app.on('ready', function () {
    server();
    mainWindow = new BrowserWindow({ width: 1360, height: 600 });
    mainWindow.loadURL('http://localhost:3007/src/index.html')
    mainWindow.openDevTools();
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
});