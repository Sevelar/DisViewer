export default function MenuElement({ onClick, onHover, children }) {
  return (
    <li className="menu-button" onClick={onClick} onHover={onHover}>
      {children}
    </li>
  );
}
