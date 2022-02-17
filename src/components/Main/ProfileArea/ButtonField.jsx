import css from "../ProfileArea.module.css";

export default function ButtonField({ children, style }) {
  return (
    <div className={css.input} style={style}>
      <button className={css.inputButton}>{children}</button>
    </div>
  );
}
