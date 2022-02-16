import { useEffect, useState, useRef } from "react";

import "./PreviewArea.css";
import Avatar from "./PreviewArea/Avatar";
import Message from "./PreviewArea/Message";
import Username from "./PreviewArea/Username";
import ProfilePreview from "./PreviewArea/ProfilePreview";

export default function PreviewArea({ value }) {
  const [activeProfile, setActiveProfile] = useState(false);
  const profileRef = useRef(null);

  const [time, setTime] = useState("");
  let [seconds, setSeconds] = useState(0);

  useEffect(() => {
    function handleClickOutside(e) {
      if (profileRef.current && !profileRef.current.contains(e.target))
        setActiveProfile(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [profileRef]);

  useEffect(() => {
    const timer = setTimeout(() => {
      let dateOpts = {
        minute: "2-digit",
        second: "2-digit",
        timeZone: "UTC",
      };

      if (seconds >= 3600) dateOpts.hour = "2-digit";
      setSeconds(++seconds);
      setTime(new Date(seconds * 1000).toLocaleString("en-GB", dateOpts));
    }, 1000);
    return () => clearTimeout(timer);
  }, [time]);

  // function handleClick() {
  //   if (profileRef !== null)
  // }

  return (
    <div className="preview-container">
      <div className="preview-wrapper">
        <Avatar onClick={() => setActiveProfile(!activeProfile)} />
        {activeProfile && (
          <ProfilePreview
            style={{
              top: 15,
              left: "calc(50% + 75px)",
            }}
            refValue={profileRef}
            timeValue={time}
          />
        )}
        <div className="preview-content">
          <Username />
          <Message>{value}</Message>
        </div>
      </div>
    </div>
  );
}
