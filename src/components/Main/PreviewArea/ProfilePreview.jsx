import defaultAvatar from "/default-avatar.png";
import logo from "/icon-img.png";
import { version } from "/package.json";

export default function ProfilePreview({ style, time }) {
  return (
    <div className="profile-box" style={style}>
      <div className="profile-img"></div>
      <div className="profile-avatar-box">
        <div className="profile-avatar">
          <img src={defaultAvatar} />
        </div>
      </div>
      <div className="profile-header">
        <div className="profile-header-text">The Seviest</div>
      </div>
      <div className="profile-body">
        <hr />
        <div className="aboutMe-box">
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vitae
            explicabo aperiam ipsa, enim voluptatibus velit sequi id molestias
            tempora sunt blanditiis.
          </p>
        </div>
        <div className="activity-box">
          <h2>Playing a game</h2>
          <div className="activity-body">
            <div className="activity-icon">
              <img src={logo} />
            </div>
            <div className="activity-info">
              <h3>DisViewer ({version})</h3>
              <p>
                Editing Untitled<br></br>
                {time} elapsed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
