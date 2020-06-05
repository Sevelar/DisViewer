import React from 'react';
import PropTypes from 'prop-types';

import './Menu.css';
const electron = window.require("electron");

class Menu extends React.Component {
    propTypes = {
        isMenuBarDescendant : PropTypes.func.isRequired,
        menuBarEvents       : PropTypes.object.isRequired,
        onSelect            : PropTypes.func.isRequired
    }

    render() {
        return(
            <div className="menu-bar">
                <ul className="menu-controls">
                    {React.Children.map(this.props.children, this.renderChild)}
                </ul>
            </div>
        );
    };

    renderChild(child) {
        return React.cloneElement(child, {
            isMenuBarDescendant : this.props.isMenuBarDescendant,
            menuBarEvents : this.props.menuBarEvents,
            onSelect : this.props.onSelect
        })
    }

    /*constructor() {
        super();
        this.container = React.createRef(); // Creating a ref
        this.state = {
            dropdownVisible: false,
        };
        this.handleClick = this.handleClick.bind(this); // Binding a click handler
        this.handleHover = this.handleHover.bind(this);
    }
    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside); // Adding an event
    }
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside); // Removing an event
    }
    handleClickOutside = event => {
        if(this.container.current && !this.container.current.contains(event.target)) { // If container exists or contains event's target
            this.setState({
                dropdownVisible: false
            })
        }
    }
    handleClick(e) {
        if (e.target.className.indexOf("menu-content") === -1) { // If event target has no value
            this.setState({dropdownVisible: e.target.id});
        }
        
    }
    handleHover(e) {
        /*if (this.state.dropdownVisible !== false) {
            this.setState({dropdownVisible: e.target.id});
        }
    }*/
    /*render() {
        return(
            <div className="menu-bar">
                <ul className="menu-controls">
                    <li className="menu-button" id="file" onClick={this.handleClick} onMouseOver={this.handleHover} ref={this.container}>File
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
                    <li className="menu-button" id="edit" onClick={this.handleClick} onMouseOver={this.handleHover} ref={this.container}>Edit
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
                    <li className="menu-button" id="view" onClick={this.handleDropdown} ref={this.container}>View
                    {this.state.dropdownVisible === "view" && 
                        <ul className="menu-content" style={{left: "90px"}}>
                            <li>Blank</li>
                        </ul>
                    }
                    </li>
                    <li className="menu-button" id="help" onClick={this.handleDropdown} ref={this.container}>Help
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
    }*/
}

export default Menu;