import EditArea from "./TextArea/EditArea";
import StyleArea from "./TextArea/StyleArea";
import css from "./TextArea.module.css";

export default function TextArea({ onChange, value }) {
  return (
    <div className={css.textBox}>
      <div className={css.textContent}>
        <EditArea onChange={onChange} value={value} />
        <StyleArea />
      </div>
    </div>
  );
}
