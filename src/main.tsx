import "./index.css";
import { StrictMode } from "react";
import { createRoot as createReactRoot } from "react-dom/client";
import { App } from "./App";

createReactRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
