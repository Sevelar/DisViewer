import "../TextArea.css";

export default function EditArea({ onEdit, edit }) {
  return (
    <textarea
      className="text-edit-container"
      onChange={onEdit}
      value={edit}
    ></textarea>
  );
}
