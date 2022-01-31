import "../PreviewArea.css";
import defaultAvatar from "/default-avatar.png";

export default function Avatar() {
  return (
    <div className="preview-avatar">
      <img src={defaultAvatar}></img>
    </div>
  );
}
