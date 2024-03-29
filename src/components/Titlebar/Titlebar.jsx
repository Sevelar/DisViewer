import { useState } from "react";
import styles from "./Titlebar.module.css";

export default function Titlebar() {
  const [title, setTitle] = useState("Untitled");

  const minimizeWindow = () => window.electronAPI.minimizeWindow();
  const maximizeWindow = () => window.electronAPI.maximizeWindow();
  const closeWindow = () => window.electronAPI.closeWindow();

  return (
    <header className={styles.titleBar}>
      <div className={styles.titleIcon}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 532 130">
          <path d="M53.2 20.3H20v37.6l22.1 20V41.4H54c7.5 0 11.2 3.7 11.2 9.5v27.9c0 5.8-3.5 9.7-11.2 9.7H20v21.2h33.2c17.8.1 34.5-8.8 34.5-29.4V50.2c0-20.8-16.7-29.9-34.5-29.9zm174.1 60.1V49.6c0-11.1 19.8-13.7 25.8-2.5l18.3-7.5C264.3 23.7 251.1 19 240.2 19c-17.8 0-35.4 10.4-35.4 30.6v30.8c0 20.3 17.6 30.6 35 30.6 11.2 0 24.6-5.6 32-20.1l-19.6-9.1c-4.8 12.4-24.9 9.4-24.9-1.4zm-60.6-26.6c-6.9-1.5-11.5-4-11.8-8.3.4-10.4 16.3-10.7 25.6-.8l14.7-11.4C186 22 175.6 19 164.8 19c-16.3 0-32.1 9.2-32.1 26.8 0 17.1 13 26.2 27.3 28.4 7.3 1 15.4 3.9 15.2 9-.6 9.6-20.2 9.1-29.1-1.8L132 94.8c8.3 10.7 19.6 16.2 30.2 16.2 16.3 0 34.4-9.5 35.1-26.8 1-22-14.8-27.5-30.6-30.4zm-66.9 55.9h22.4V20.3H99.8v89.4zm377.7-89.4h-33.2v37.6l22.1 20V41.4h11.8c7.5 0 11.2 3.7 11.2 9.5v27.9c0 5.8-3.5 9.7-11.2 9.7h-34v21.2h33.2c17.8.1 34.5-8.8 34.5-29.4V50.2c.1-20.8-16.6-29.9-34.4-29.9zM314.6 19c-18.4 0-36.7 10.1-36.7 30.7v30.6c0 20.5 18.4 30.7 36.9 30.7 18.4 0 36.7-10.2 36.7-30.7V49.7c0-20.5-18.5-30.7-36.9-30.7zM329 80.3c0 6.4-7.2 9.7-14.3 9.7-7.2 0-14.4-3.2-14.4-9.7V49.7c0-6.6 7-10.1 14-10.1 7.3 0 14.7 3.2 14.7 10.1v30.6zm102.8-30.6c-.5-21-14.7-29.4-33-29.4h-35.5v89.5H386V81.3h4l20.6 28.4h28L414.4 79c10.8-3.4 17.4-12.7 17.4-29.3zm-32.6 12.1H386V41.4h13.2c14.2 0 14.2 20.4 0 20.4z" />
        </svg>
      </div>
      <div className={styles.titleText}>{title} - DisViewer</div>
      <div className={styles.titleControls}>
        <div className={styles.titleButton} id="min" onClick={minimizeWindow}>
          &#xE921;
        </div>
        <div className={styles.titleButton} id="max" onClick={maximizeWindow}>
          &#xE922;
        </div>
        <div className={styles.titleButton} id="close" onClick={closeWindow}>
          &#xE8BB;
        </div>
      </div>
    </header>
  );
}
