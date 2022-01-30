import { useState } from "react";
import { ReactComponent as Discord } from "./Discord.svg";
import "./Titlebar.css";

export default function Titlebar() {
  const [title, setTitle] = useState("Untitled");

  const minimizeWindow = () => window.electronAPI.minimizeWindow();
  const maximizeWindow = () => window.electronAPI.maximizeWindow();
  const closeWindow = () => window.electronAPI.closeWindow();

  return (
    <header className="title-bar">
      <div className="title-icon">
          <Discord />
      </div>
      <div className="title-text">{title} - DisViewer</div>
      <div className="title-controls">
          <div className="button" id="min" onClick={minimizeWindow}>&#xE921;</div>
          <div className="button" id="max" onClick={maximizeWindow}>&#xE922;</div>
          <div className="button" id="close" onClick={closeWindow}>&#xE8BB;</div>
      </div>
    </header>
  );
}