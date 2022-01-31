import logo from "./logo.png";
import TextArea from "./TextArea";
import PreviewArea from "./PreviewArea";
//import "./Main.css";
import "./MainNew.css";

export default function Main() {
  return (
    <div className="main">
      <TextArea />
      <PreviewArea />
      {/*<header className="mainHeader">
        <img src={logo} className="logo" alt="DisViewer Logo" />
        <p>Everything works just as fine!</p>
        <a
          className="link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Documentation
        </a>
      </header>*/}
    </div>
  );
}
