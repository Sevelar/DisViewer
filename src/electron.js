const electorn = require("electron");
const ipcMain = require("electron").ipcMain;
const app = electorn.app;
const BrowserWindow = electorn.BrowserWindow;

const path = require("path");

const isWindows = (process.platform === 'win32');
const isMac = (process.platform === 'darwin');
const isLinux = (process.platform === 'linux');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        icon: path.join(__dirname, "../public/img/new-icon.ico"),
        width: 1280,
        height: 720,
        minWidth: 960,
        minHeight: 540,
        frame: false,
        webPreferences: { nodeIntegration: true }
    });
    
    // Removes stock Menubar
    mainWindow.setMenu(null);

    // [DEV] Load the local server
    mainWindow.loadURL("http://localhost:3000");

    // [DEV] Open Dev Tools
    mainWindow.webContents.openDevTools();

    // Load the HTML file
    //mainWindow.loadFile(path.join(__dirname, "/public/index.html"));
    
    mainWindow.on("closed", () => { mainWindow = null; });

    mainWindow.on('maximize', () => {
        mainWindow.webContents.send('maximized');
    });

    mainWindow.on('unmaximize', () => {
        mainWindow.webContents.send('unmaximized')
    });
}

ipcMain.handle('minimize-event', () => {
    mainWindow.minimize();
})

ipcMain.handle('maximize-event', () => {
    mainWindow.maximize();
})

ipcMain.handle('unmaximize-event', () => {
    mainWindow.unmaximize()
})

ipcMain.handle('close-event', () => {
    app.quit()
})

app.on('browser-window-focus', () => {
    mainWindow.webContents.send('focused')
})

app.on('browser-window-blur', () => {
    mainWindow.webContents.send('blurred')
})

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});