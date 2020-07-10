const electron = require("electron");
const ffmpeg = require("fluent-ffmpeg");

const { app, BrowserWindow, ipcMain } = electron;

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
    },
  });
  mainWindow.loadURL(`file://${__dirname}./index.html`);
});

ipcMain.on("video_submitted", (event, path) => {
  ffmpeg.ffprobe(path, (err, metadata) => {
    mainWindow.webContents.send("video_length", metadata.format.duration);
  });
});

// ipcMain is an electron module which is used to get prop from html/js side of project
// mainWindow.webContents.send is to send props.
// let mainWindow is used beacuse of scope of mainWindow
//if require not defined in html then try using webPreferences in js BrowserWindow as below
// install npm i --save fluent-ffmpeg after installing into computer
