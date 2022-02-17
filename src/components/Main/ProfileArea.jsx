import css from "./ProfileArea.module.css";
import InputField from "./ProfileArea/InputField";
import ButtonField from "./ProfileArea/ButtonField";
import InputArea from "./ProfileArea/InputArea";
import ProfilePreview from "./PreviewArea/ProfilePreview";

export default function ProfileArea({ onClick }) {
  return (
    <div className={css.profile}>
      <div className={css.profileWrapper}>
        <div className={css.profileContent}>
          <h1>Profile</h1>
          <div className={css.profileChildren}>
            <div style={{ flex: "1 1 auto" }}>
              <div className={css.profileForm}>
                <h2>Nickname</h2>
                <InputField />
              </div>
              <div className={css.profileForm}>
                <h2>Avatar</h2>
                <ButtonField style={{ width: 125 }}>Change Avatar</ButtonField>
              </div>
              <div className={css.profileForm}>
                <h2>Profile Banner</h2>
                <ButtonField style={{ width: 125 }}>Change Banner</ButtonField>
              </div>
              <div className={css.profileForm}>
                <h2>About Me</h2>
                <InputArea />
              </div>
            </div>
            <div>
              <h2>Preview in this server</h2>
              <ProfilePreview
                style={{ height: "95%" }}
                isCounter={false}
              ></ProfilePreview>
            </div>
          </div>
        </div>
        <div
          className={css.inputQuit}
          style={{ width: 40, height: 40, top: 20, right: 50 }}
          onClick={onClick}
        >
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>
    </div>
  );
}
