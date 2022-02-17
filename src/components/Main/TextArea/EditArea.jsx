import css from "../TextArea.module.css";

export default function EditArea({ onChange, value }) {
  return (
    <textarea
      className={css.textEdit}
      onChange={onChange}
      value={value}
    ></textarea>
  );
}
