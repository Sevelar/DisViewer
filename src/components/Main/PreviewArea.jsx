import { useEffect, useState } from "react";

import "./PreviewArea.css";
import Avatar from "./PreviewArea/Avatar";
import Message from "./PreviewArea/Message";
import Username from "./PreviewArea/Username";
import ProfilePreview from "./PreviewArea/ProfilePreview";

export default function PreviewArea({ content }) {
  const [active, setActive] = useState(false);

  let [seconds, setSeconds] = useState(0);
  const [time, setTime] = useState("");

  let dateOpts = {
    minute: "2-digit",
    second: "2-digit",
    timeZone: "UTC",
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSeconds(++seconds);
      seconds >= 3600 && (dateOpts.hour = "2-digit");
      let date = new Date(seconds * 1000).toLocaleString("en-GB", dateOpts);
      setTime(date);
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="preview-container">
      <div className="preview-wrapper">
        <Avatar onClick={() => setActive(!active)}>
          {active && (
            <ProfilePreview
              style={{
                top: -52,
                left: 62,
              }}
              time={time}
            ></ProfilePreview>
          )}
        </Avatar>
        <div className="preview-content">
          <Username />
          <Message>{content}</Message>
          {/* {<Message content={content} />} */}
        </div>
      </div>
    </div>
  );
}
