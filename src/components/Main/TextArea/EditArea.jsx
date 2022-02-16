import "../TextArea.css";

export default function EditArea({ onChange, value }) {
  return (
    <textarea
      className="text-edit-container"
      onChange={onChange}
      value={value}
    ></textarea>
  );
}
