const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 400, // Adjust as needed
    height: 700, // Adjust as needed
    minWidth: 360,
    minHeight: 640,
    webPreferences: {
      // It's good practice to keep nodeIntegration and contextIsolation secure
      nodeIntegration: false,
      contextIsolation: true,
      // preload: path.join(__dirname, 'preload.js') // A preload script can be added for more advanced integration
    },
    title: "Minimal To-Do",
    // icon: path.join(__dirname, 'icon.png') // Optional: path to an application icon
  });

  // Load the index.html of the app.
  mainWindow.loadFile('index.html');

  // Open the DevTools (optional, for debugging).
  // mainWindow.webContents.openDevTools();
}

// This method will be called when Electron has finished initialization and is ready to create browser windows.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});