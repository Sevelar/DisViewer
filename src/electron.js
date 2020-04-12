const { app, BrowserWindow } = require("electron");
const path = require("path");
let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        minWidth: 800,
        minHeight: 640,
        frame: false,
        autoHideMenuBar: true,
        icon: path.join(__dirname, "../public/img/new-icon.ico"),
        webPreferences: {
            nodeIntegration: true
        }
    });
    // [Dev] Load the local server
    mainWindow.loadURL("http://localhost:3000");
    // [Dev] Open Dev Tools
    mainWindow.webContents.openDevTools();
    // Load the HTML file
    //mainWindow.loadFile(path.join(__dirname, "/public/index.html"));
    
    mainWindow.on("closed", () => {
        mainWindow = null;
    })
}

app.on("ready", createWindow);
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
})
app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
})