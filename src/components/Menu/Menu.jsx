import { useState } from "react";
import "./Menu.css";
import MenuElement from "./MenuElement";
import FileComponent from "./MenuComponents/FileComponent";
import EditComponent from "./MenuComponents/EditComponent";
import ViewComponent from "./MenuComponents/ViewComponent";
import HelpComponent from "./MenuComponents/HelpComponent";

export default function Menu() {
  const [active, setActive] = useState(false);
  const [context, setContext] = useState(0);

  function giveContext(value) {
    if (!active) setActive(true);
    else setActive(false);
    setContext(value);
  }

  return (
    <div className="menu-bar">
      <ul className="menu-controls">
        <MenuElement
          onClick={() => (active ? giveContext(0) : giveContext(1))}
          onHover={() => active && setContext(1)}
        >
          File
          {context === 1 && <FileComponent />}
        </MenuElement>
        <MenuElement
          onClick={() => (active ? giveContext(0) : giveContext(2))}
          onHover={() => active && setContext(2)}
        >
          Edit
          {context === 2 && <EditComponent />}
        </MenuElement>
        <MenuElement
          onClick={() => (active ? giveContext(0) : giveContext(3))}
          onHover={() => active && setContext(3)}
        >
          View
          {context === 3 && <ViewComponent />}
        </MenuElement>
        <MenuElement
          onClick={() => (active ? giveContext(0) : giveContext(4))}
          onHover={() => active && setContext(4)}
        >
          Help
          {context === 4 && <HelpComponent />}
        </MenuElement>
      </ul>
    </div>
  );
}
