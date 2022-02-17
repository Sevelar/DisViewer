import css from "../PreviewArea.module.css";
import defaultAvatar from "/default-avatar.png";

export default function Avatar({ onClick }) {
  return (
    <div className={css.previewAvatar} onClick={onClick}>
      <img src={defaultAvatar}></img>
    </div>
  );
}
