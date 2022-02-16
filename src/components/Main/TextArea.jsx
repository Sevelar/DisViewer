import "./TextArea.css";
import EditArea from "./TextArea/EditArea";
import StyleArea from "./TextArea/StyleArea";

export default function TextArea({ onChange, value }) {
  return (
    <div className="text-container">
      <div className="text-content">
        <EditArea onChange={onChange} value={value} />
        <StyleArea />
      </div>
    </div>
  );
}
