import React from 'react';
import './Menu.css';
const electron = window.require("electron");

class Menu extends React.Component {
    constructor() {
        super();
        this.state = {
            dropdownVisible: false,
            focus: false
        };
        this.handleDropdown = this.handleDropdown.bind(this);
    }
    handleDropdown(e) {
        if (e.target.className.indexOf("menu-content") === -1) {
            this.setState({dropdownVisible: e.target.id, focus: "true"});
        }
    }
    render() {
        return(
            <div className="menu-bar">
                <ul className="menu-controls">
                    <li className="menu-button"id="file" onClick={this.handleDropdown} style={{backgroundColor: this.state.focus ? "rgb(255,255,255,0.2)" : "transparent"}}>File
                    {this.state.dropdownVisible === "file" && 
                        <ul className="menu-content">
                            <li>New File
                                <span className="subtext">CTRL+N</span>
                            </li>
                            <li>New Window
                                <span className="subtext">CTRL+SHIFT+N</span>
                            </li>
                            <hr className="solid"/>
                            <li>Open File...
                                <span className="subtext">CTRL+O</span>
                            </li>
                            <li>Save
                                <span className="subtext">CTRL+S</span>
                            </li>
                            <li>Save As...
                                <span className="subtext">CTRL+SHIFT+S</span>
                            </li>
                            <hr className="solid"/>
                            <li>Exit</li>
                        </ul>
                    }
                    </li>
                    <li className="menu-button" id="edit" onClick={this.handleDropdown}>Edit
                    {this.state.dropdownVisible === "edit" && 
                        <ul className="menu-content" style={{left: "45px"}}>
                            <li>Undo
                                <span className="subtext">CTRL+Z</span>
                            </li>
                            <li>Redo
                                <span className="subtext">CTRL+Y</span>
                            </li>
                            <hr className="solid"/>
                            <li>Cut
                                <span className="subtext">CTRL+X</span>
                            </li>
                            <li>Copy
                                <span className="subtext">CTRL+C</span>
                            </li>
                            <li>Paste
                                <span className="subtext">CTRL+V</span>
                            </li>
                        </ul>
                    }
                    </li>
                    <li className="menu-button" id="view" onClick={this.handleDropdown}>View
                    {this.state.dropdownVisible === "view" && 
                        <ul className="menu-content" style={{left: "90px"}}>
                            <li>Blank</li>
                        </ul>
                    }
                    </li>
                    <li className="menu-button" id="help" onClick={this.handleDropdown}>Help
                    {this.state.dropdownVisible === "help" &&
                        <ul className="menu-content" style={{left: "135px"}}>
                            <li>Release Notes</li>
                            <li>Community Templates</li>
                            <li>DisViewer Markdown</li>
                            <hr className="solid"/>
                            <li>Check for Updates</li>
                            <hr className="solid"/>
                            <li>About</li>
                    </ul>
                    }
                    </li>
                </ul>
                <div className="menu-blank"/>
            </div>
        )
    }
}

export default Menu;