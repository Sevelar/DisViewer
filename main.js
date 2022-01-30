import { app, BrowserWindow } from "electron";
import path from "path";

function createWindow() {
  const window = new BrowserWindow({
    width: 1280,
    height: 720,
    minWidth: 960,
    minHeight: 540,
    frame: false,
    icon: path.join(import.meta.url, "public/icon.ico"),
    webPreferences: {
      preload: path.join(import.meta.url, "preload.js"),
    },
  });

  if (process.env.NODE === "production") {
    window.loadFile("dist/index.html");
  } else {
    window.loadURL("http://localhost:3000");
    mainWindow.webContents.openDevTools();
  }
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

// Removes stock Menubar
// mainWindow.setMenu(null);
