import css from "../PreviewArea.module.css";
import defaultAvatar from "/default-avatar.png";

export default function Avatar({ onClick, refValue }) {
  return (
    <div className={css.previewAvatar} onClick={onClick} ref={refValue}>
      <img src={defaultAvatar}></img>
    </div>
  );
}
