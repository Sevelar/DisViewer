export default function MenuElement({ onClick, onHover, children }) {
  return (
    <li className="menu-button" onClick={onClick} onMouseOver={onHover}>
      {children}
    </li>
  );
}
