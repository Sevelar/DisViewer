import "../PreviewArea.css";

export default function Username({ username = "The Seviest" }) {
  return (
    <div className="preview-heading">
      <span className="preview-username">{username}</span>
      <span className="preview-timestamp">{`${new Date().toLocaleDateString(
        "en-GB"
      )}`}</span>
    </div>
  );
}
