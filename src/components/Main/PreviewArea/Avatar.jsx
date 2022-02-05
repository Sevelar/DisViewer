import "../PreviewArea.css";
import defaultAvatar from "/default-avatar.png";

export default function Avatar({ onClick, children }) {
  return (
    <div className="preview-avatar" onClick={onClick}>
      <img src={defaultAvatar}></img>
      {children}
    </div>
  );
}
