import defaultAvatar from "/default-avatar.png";
import logo from "/icon-img.png";
import { version } from "/package.json";

import css from "./ProfilePreview.module.css";

export default function ProfilePreview({
  style,
  timeValue,
  refValue,
  isCounter = true,
}) {
  return (
    <div className={css.profile} style={style} ref={refValue}>
      <div className={css.profileImg}></div>
      <div className={css.profileAvatarBox}>
        <div className={css.profileAvatar}>
          <img src={defaultAvatar} />
        </div>
      </div>
      <div className={css.profileHeader}>
        <div className={css.profileHeaderText}>The Seviest</div>
      </div>
      <div className={css.profileBody}>
        <hr />
        <div className={css.aboutMe}>
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vitae
            explicabo aperiam ipsa, enim voluptatibus velit sequi id molestias
            tempora sunt blanditiis.
          </p>
        </div>
        <div className={css.activity}>
          <h2>Playing a game</h2>
          <div className={css.activityBody}>
            <div className={css.activityIcon}>
              <img src={logo} />
            </div>
            <div className={css.activityInfo}>
              <h3>DisViewer ({version})</h3>
              {isCounter ? (
                <p>
                  Editing Untitled<br></br>
                  {timeValue || "00:00"} elapsed
                </p>
              ) : (
                <p>DisViewer is fun!</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
