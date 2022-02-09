import "../PreviewArea.css";
import defaultAvatar from "/default-avatar.png";

export default function Avatar({ onClick }) {
  return (
    <div className="preview-avatar" onClick={onClick}>
      <img src={defaultAvatar}></img>
    </div>
  );
}
