const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    minWidth: 960,
    minHeight: 540,
    frame: false,
    icon: path.join(__dirname, "dist/icon.ico"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  if (process.env.NODE_ENV !== "production") {
    mainWindow.loadURL("http://localhost:3000");
  } else {
    mainWindow.loadFile("dist/index.html");
  }

  ipcMain.handle("minimize", () => mainWindow.minimize());
  ipcMain.handle("maximize", () => {
    if (!mainWindow.isMaximized()) {
      mainWindow.maximize();
    } else {
      mainWindow.unmaximize();
    }
  });
  ipcMain.handle("close", () => mainWindow.close());
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
