import "./TextArea.css";
import EditArea from "./TextArea/EditArea";
import StyleArea from "./TextArea/StyleArea";

export default function TextArea({ onEdit, edit }) {
  return (
    <div className="text-container">
      <div className="text-content">
        <EditArea onEdit={onEdit} edit={edit} />
        <StyleArea />
      </div>
    </div>
  );
}
