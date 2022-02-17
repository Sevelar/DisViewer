import css from "../TextArea.module.css";

export default function StyleArea() {
  return (
    <div className={css.textStyle}>
      <div>
        <i className="fa-solid fa-bold"></i>
      </div>
      <div>
        <i className="fa-solid fa-italic"></i>
      </div>
      <div>
        <i className="fa-solid fa-strikethrough"></i>
      </div>
      <div>
        <i className="fa-solid fa-quote-left"></i>
      </div>
      <div>
        <i className="fa-solid fa-code"></i>
      </div>
      <div>
        <i className="fa-solid fa-eye"></i>
      </div>
      <div>
        <i className="fa-solid fa-image"></i>
      </div>
      <div style={{ flex: "1 1 0" }}>Markdown Editor</div>
    </div>
  );
}
