import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { state, ThemeContext } from "./context/themeContext";

async function mountApp() {
  if (process.env.NODE_ENV === "development") {
    const { worker } = require("./mock/browser");
    await worker.start(); //msw 시작
  }

  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <ThemeContext.Provider value={state}>
        <App />
      </ThemeContext.Provider>
    </React.StrictMode>
  );
}

mountApp();
