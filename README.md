# videoinfo
 video info is a native desktop app made with electron with basic html page and we used ffmpeg to display the video duration

ipcMain is an electron module which is used to get prop from html/js side of project

mainWindow.webContents.send is to send props.

let mainWindow is used beacuse of scope of mainWindow

if require not defined in html then try using webPreferences in js BrowserWindow as below

install npm i --save fluent-ffmpeg in app folder after installing cli into computer

You can install the FFMPEG CLI by following the directions in this official installation guide.  Check it out here: https://github.com/adaptlearning/adapt_authoring/wiki/Installing-FFmpeg


