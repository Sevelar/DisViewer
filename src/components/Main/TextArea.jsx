import "./TextArea.css";
import EditArea from "./TextArea/EditArea";
import StyleArea from "./TextArea/StyleArea";

export default function TextArea() {
  return (
    <div className="text-container">
      <div className="text-content">
        <EditArea />
        <StyleArea />
      </div>
    </div>
  );
}
