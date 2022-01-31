import "../PreviewArea.css";
import defaultAvatar from "/public/default-avatar.png?import";

export default function Avatar() {
  return (
    <div className="preview-avatar">
      <img src={defaultAvatar}></img>
    </div>
  );
}
