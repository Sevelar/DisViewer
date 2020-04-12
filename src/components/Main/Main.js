import React from 'react';
import logo from './logo.png';
import './Main.css';

class Main extends React.Component {
    render() {
        return(
            <div className="main">
                <header className="mainHeader">
                    <img src={logo} className="logo" alt="DisViewer Logo"/>
                    <p>
                        Everything works just as fine!
                    </p>
                    <a
                        className="link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    React Documentation
                    </a>
                </header>
            </div>
        )
    }
}

export default Main;