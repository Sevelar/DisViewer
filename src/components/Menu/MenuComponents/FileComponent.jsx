import "../Menu.css";

export default function FileComponent() {
  return (
    <ul className="menu-content">
      <li>
        New File
        <span className="subtext">CTRL+N</span>
      </li>
      <li>
        New Window
        <span className="subtext">CTRL+SHIFT+N</span>
      </li>
      <hr className="solid" />
      <li>
        Open File...
        <span className="subtext">CTRL+O</span>
      </li>
      <li>
        Save
        <span className="subtext">CTRL+S</span>
      </li>
      <li>
        Save As...
        <span className="subtext">CTRL+SHIFT+S</span>
      </li>
      <hr className="solid" />
      <li>Exit</li>
    </ul>
  );
}
