import css from "../PreviewArea.module.css";

export default function Username({ username = "The Seviest" }) {
  return (
    <div className={css.previewHeading}>
      <span className={css.previewUsername}>{username}</span>
      <span className={css.previewTimestamp}>{`${new Date().toLocaleDateString(
        "en-GB"
      )}`}</span>
    </div>
  );
}
