import "./PreviewArea.css";
import Avatar from "./PreviewArea/Avatar";
import Message from "./PreviewArea/Message";
import Username from "./PreviewArea/Username";

export default function PreviewArea({ content }) {
  return (
    <div className="preview-container">
      <div className="preview-wrapper">
        <Avatar />
        <div className="preview-content">
          <Username />
          <Message>{content}</Message>
          {/* {<Message content={content} />} */}
        </div>
      </div>
    </div>
  );
}
