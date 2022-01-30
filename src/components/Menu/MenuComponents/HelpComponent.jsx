import "../Menu.css";

export default function HelpComponent() {
  return (
    <ul className="menu-content" style={{ left: "135px" }}>
      <li>Release Notes</li>
      <li>Community Templates</li>
      <li>DisViewer Markdown</li>
      <hr className="solid" />
      <li>Check for Updates</li>
      <hr className="solid" />
      <li>About</li>
    </ul>
  );
}
