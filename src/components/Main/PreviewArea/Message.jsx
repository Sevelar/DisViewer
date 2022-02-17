import css from "../PreviewArea.module.css";

export default function Message({ children }) {
  return <div className={css.previewMessage}>{children}</div>;
}
