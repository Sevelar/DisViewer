const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  minimizeWindow: () => ipcRenderer.invoke("minimize"),
  maximizeWindow: () => ipcRenderer.invoke("maximize"),
  closeWindow: () => ipcRenderer.invoke("close"),
});
