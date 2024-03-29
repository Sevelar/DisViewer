import Main from "./components/Main/Main";
import Titlebar from "./components/Titlebar/Titlebar";
import Menu from "./components/Menu/Menu";

export default function App() {
  return (
    <>
      {window.electronAPI && (
        <div>
          <Titlebar />
          <Menu />
        </div>
      )}
      <Main />
    </>
  );
}
