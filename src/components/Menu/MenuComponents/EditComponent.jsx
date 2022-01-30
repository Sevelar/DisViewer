import "./Menu.css";

export default function EditComponent() {
  return (
    <ul className="menu-content" style={{ left: "45px" }}>
      <li>
        Undo
        <span className="subtext">CTRL+Z</span>
      </li>
      <li>
        Redo
        <span className="subtext">CTRL+Y</span>
      </li>
      <hr className="solid" />
      <li>
        Cut
        <span className="subtext">CTRL+X</span>
      </li>
      <li>
        Copy
        <span className="subtext">CTRL+C</span>
      </li>
      <li>
        Paste
        <span className="subtext">CTRL+V</span>
      </li>
    </ul>
  );
}
