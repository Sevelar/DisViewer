<hr />

<img src="internals/img/disview-banner.png" width="100%" />

<hr />

<p>
  Introducing: <b>DisViewer!</b> The live-preview text editor styled in fashioned Discord theme. This application utilizes frameworks like <a href="https://electron.atom.io/">Electron.js</a> and <a href="https://facebook.github.io/react/">React.js</a>. It shares a lot of functionality from its older predecessor, <a href="https://github.com/Sevelar/Discord-Previewer/">Discord Previewer.</a> 

This project is a direct successor to Discord Previewer. The old application will no longer receive any updates, while DisViewer will continue to be maintained and updated. Stay tuned for more updates.
</p>

<hr />

This project uses [Vite tooling](https://vitejs.dev/) for testing and building web applications.

## ⚙️ Install and Run

1. Clone the repository via Git and install all required dependencies:
```bash
git clone https://github.com/Sevelar/DisViewer.git your-project-name
cd your-project-name
npm install
```

2. Once it's done, run the attached scripts to get the application up and running:
```bash
npm dev
npm electron
```

These commands will start a development server and open a new Electron instance with the application ready to go.

## 🔧 Available Scripts

In the project directory, you can run:

### `npm dev`

Runs the app in the development mode.<br />
Go to `http://localhost:3000` to view it in the browser.

The page will reload if you make edits.<br />
You will also see any errors in the console.

⚠️ Disclaimer: Keep in mind that native Electron methods will be unavailable in the web browser.

### `npm electron`

Opens the new Electron instance.<br />
Once you run the application in development mode, you can use this script in order to create an Electron instance to debug your code.<br />
<br />
Since this application was meant to be opened with Electron in mind, you'll need this script in order to successfully run the application.

### Remaining Scripts

You can find the list of remaining scripts in the `package.json` file.

## 📝 Learn More

If you are interested in getting started with React and Electron, you should check out both [React documentation](https://reactjs.org/) and [Electron documentation](https://www.electronjs.org/docs/latest/).