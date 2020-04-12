import React from 'react';
import { ReactComponent as Discord } from "./Discord.svg";
import "./Titlebar.css";
const electron = window.require("electron");

class Titlebar extends React.Component {
    constructor(props) {
        super(props);
        this.minimizeWindow = this.minimizeWindow.bind(this);
        this.maximizeWindow = this.maximizeWindow.bind(this);
        this.closeWindow = this.closeWindow.bind(this);
    }
    minimizeWindow() {
        let window = electron.remote.getCurrentWindow();
        window.minimize();
    }
    maximizeWindow() {
        let window = electron.remote.getCurrentWindow();
        if (!window.isMaximized()) {
            window.maximize();
        }
        else {
            window.unmaximize();
        }
    }
    closeWindow() {
        let window = electron.remote.getCurrentWindow();
        window.close();
    }
    render() {
        return(
            <header className="title-bar">
                <div className="title-icon">
                    <Discord/>
                </div>
                <div className="title-text">Untitled - DisViewer</div>
                <div className="title-controls">
                    <div className="button" id="min" onClick={this.minimizeWindow}>&#xE921;</div>
                    <div className="button" id="max" onClick={this.maximizeWindow}>&#xE922;</div>
                    <div className="button" id="close" onClick={this.closeWindow}>&#xE8BB;</div>
                </div>
            </header>
        )
    }
}
export default Titlebar;