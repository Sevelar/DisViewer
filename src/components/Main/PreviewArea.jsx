import { useEffect, useState, useRef } from "react";

import Avatar from "./PreviewArea/Avatar";
import Message from "./PreviewArea/Message";
import Username from "./PreviewArea/Username";
import ProfilePreview from "./PreviewArea/ProfilePreview";
import css from "./PreviewArea.module.css";

export default function PreviewArea({ value }) {
  const [activeProfile, setActiveProfile] = useState(false);
  const profileRef = useRef(null);
  const avatarRef = useRef(null);

  const [time, setTime] = useState("");
  let [seconds, setSeconds] = useState(0);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target) &&
        !avatarRef.current.contains(e.target)
      ) {
        setActiveProfile(false);
      }
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

  return (
    <div className={css.preview}>
      <div className={css.previewWrapper}>
        <Avatar
          onClick={() => setActiveProfile(!activeProfile)}
          refValue={avatarRef}
        />
        {activeProfile && (
          <ProfilePreview
            style={{
              top: avatarRef.current.offsetTop,
              left: `${avatarRef.current.offsetLeft + 54}px`,
              position: "absolute",
            }}
            refValue={profileRef}
            timeValue={time}
          />
        )}
        <div className={css.previewContent}>
          <Username />
          <Message>{value}</Message>
        </div>
      </div>
    </div>
  );
}
