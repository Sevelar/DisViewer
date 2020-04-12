import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main/Main.js';
import Titlebar from './components/Titlebar/Titlebar.js';
import Menu from './components/Menu/Menu.js';
import "./reset.css";

ReactDOM.render(
  <React.StrictMode>
    <Titlebar/>
    <Menu/>
    <Main/>
  </React.StrictMode>,
  document.getElementById('root')
);

