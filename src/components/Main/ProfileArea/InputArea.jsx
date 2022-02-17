import css from "../ProfileArea.module.css";

export default function InputArea() {
  return (
    <div className={css.input}>
      <textarea className={css.inputTextarea}></textarea>
    </div>
  );
}
